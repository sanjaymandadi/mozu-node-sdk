

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
		applyShippingAdjustment :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/adjustment/shipping?updatemode={updateMode}&version={version}&responseFields={responseFields}'
		}),
		applyAdjustment :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/adjustment?updatemode={updateMode}&version={version}&responseFields={responseFields}'
		}),
		removeShippingAdjustment :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/orders/{orderId}/adjustment/shipping?updatemode={updateMode}&version={version}'
		}),
		removeAdjustment :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/orders/{orderId}/adjustment?updatemode={updateMode}&version={version}'
		})	
	});
};