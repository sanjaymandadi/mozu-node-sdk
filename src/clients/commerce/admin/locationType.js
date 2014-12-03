

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants');


module.exports = function(Client){
	return Client.sub({
		getLocationTypes :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/admin/locationtypes/'
		}),
		getLocationType :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/admin/locationtypes/{locationTypeCode}?responseFields={responseFields}'
		}),
		addLocationType :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/admin/locationtypes/?responseFields={responseFields}'
		}),
		updateLocationType :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/admin/locationtypes/{locationTypeCode}?responseFields={responseFields}'
		}),
		deleteLocationType :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/admin/locationtypes/{locationTypeCode}'
		})	
	});
};
