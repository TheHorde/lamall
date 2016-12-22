define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			home: "home",
			market: "market",
			order: "order",
			mine: "mine"
		},
		home: function(){
			require(["modules/home/home.js"]);
		},
		market: function(){
			require(["modules/market/market.js"]);
		},
		order: function(){
			require(["modules/order/order.js"]);
		},
		mine: function(){
			require(["modules/mine/mine.js"]);
		},
	});
	return new Router();
});