sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("netflix_randomizer.controller.View1", {
		/**
	*@memberOf netflix_randomizer.controller.View1
	*/
search_actor: function () {
			
		},
		/**
	*@memberOf netflix_randomizer.controller.View1
	*/
on_search: function () {
	
		  /*
			var actor = this.getView().byId("__input0").getValue();
			var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryType = "actor=";
			var query = actor;
			console.log(actor);
			req.open("GET", URL + queryType + query, true);
			req.addEventListener("load", function () {
				var response = JSON.parse(req.responseText);
				console.log(response);
			});
			//this.getView().byId("__input5").setValue(response.director);
			req.send(null);
			*/
			var req = new XMLHttpRequest();

var URL = "https://netflixroulette.net/api/api.php?";
var queryType = "actor=";
var query = "statham";

req.open('GET', URL + queryType + query, true);
req.addEventListener("load", function() {
	var response = JSON.parse(req.responseText);
	console.log(response);
});
req.send(null);
		}
	});
});