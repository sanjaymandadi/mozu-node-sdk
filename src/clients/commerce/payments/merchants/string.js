

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../../constants');


module.exports = function(Client){
	return Client.sub({
		hasSubscription :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/payments/merchants/sync/'
		}),
		getValidTypes :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/payments/merchants/sync/types'
		}),
		create :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/payments/merchants/sync/'
		}),
		update :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/payments/merchants/sync/'
		}),
		delete :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/payments/merchants/sync/'
		})	
	});
};