

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
		getAvailablePickupFulfillmentActions :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}/actions'
		}),
		getPickup :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}?responseFields={responseFields}'
		}),
		createPickup :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/orders/{orderId}/pickups?responseFields={responseFields}'
		}),
		updatePickup :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}?responseFields={responseFields}'
		}),
		deletePickup :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}'
		})	
	});
};
