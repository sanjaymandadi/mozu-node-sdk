'use strict';

var hashStream = require('./hash-stream'),
    concat = require('concat-stream'),
    constants = require('../constants'),
    url = require('url'),
    util = require('util'),
    defaultTimeout = constants.capabilityTimeoutInSeconds;

module.exports = function isRequestValid(context, req, cb) {
  var timeout = context.capabilityTimeoutInSeconds || defaultTimeout;
  var uri = url.parse(req.url, true),
      queryString = uri.query,
      requestDate = new Date(queryString.dt),
      currentDate = new Date(),
      diff = (currentDate - requestDate) / 1000;

  req.pipe(hashStream(context.sharedSecret, queryString.dt)).pipe(concat(function (hash) {
    if (hash !== queryString.messageHash || diff > timeout) {
      return cb(new Error(util.format("Unauthorized access from %s, %s, %s Computed: %s", req.headers.host, queryString.messageHash, queryString.dt, hash)));
    } else {
      return cb(null);
    }
  }));
};