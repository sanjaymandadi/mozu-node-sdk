var nock = require('nock');
var path = require('path');
var fs = require('fs');

module.exports = function (name, options) {
  // options tell us where to store our fixtures
  options = options || {};
  var test_folder = options.test_folder || 'test';
  var fixtures_folder = options.fixtures_folder || 'fixtures';
  var fp = path.join(test_folder, fixtures_folder, name + '.js');
  // `has_fixtures` indicates whether the test has fixtures we should read,
  // or doesn't, so we should record and save them.
  // the environment variable `NOCK_RECORD` can be used to force a new recording.
  var has_fixtures = !!process.env.NOCK_RECORD;

  return {
    // starts recording, or ensure the fixtures exist
    before: function () {
      if (!has_fixtures) try {
        require(path.resolve(fp));
        console.log('using recorded fixtures ' + fp);
        has_fixtures = true;
      } catch (e) {
        nock.recorder.rec({
          dont_print: true
        });
      } else {
        has_fixtures = false;
        fs.readdirSync(path.join(test_folder, fixtures_folder)).filter(function(filename) {
          return filename.indexOf('fixtures-') === 0 && path.extname(filename) === ".js";
        }).map(function(filename) {
          return path.resolve(test_folder, fixtures_folder, filename);
        }).forEach(fs.unlinkSync);
        nock.recorder.rec({
          dont_print: true
        });
      }
    },
    // saves our recording if fixtures didn't already exist
    after: function (done) {
      if (!has_fixtures) {
        has_fixtures = nock.recorder.play();
        var text = "var nock = require('nock');\n" + has_fixtures.join('\n');
        fs.writeFile(fp, text, done);
      } else {
        done();
      }
    }
  }
};