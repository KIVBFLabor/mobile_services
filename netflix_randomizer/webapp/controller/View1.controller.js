sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("netflix_randomizer.controller.View1", {
		/**
	*@memberOf netflix_randomizer.controller.View1
	*/
search_actor: function () {
			var actor = this.getView().byId("__input0").getValue();
			
			var req = new XMLHttpRequest();

var URL = "https://netflixroulette.net/api/api.php?";
var queryType = "actor=";
var query = actor;

req.open('GET', URL + queryType + query, true);
req.addEventListener("load", function() {
	var response = JSON.parse(req.responseText);
	response.forEach(function(elem){
  	console.log(elem.show_title);
  });
});
req.send(null);
		}
	});
});