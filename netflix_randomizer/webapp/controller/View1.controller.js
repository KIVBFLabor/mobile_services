sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("netflix_randomizer.controller.View1", {
		/**
	*@memberOf netflix_randomizer.controller.View1
	*/
	
on_search: function () {

		var cast;
		var title;
		var director;
		var summary;
		var poster;
		var rating;
		
		var count;
		
				var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}
	
		var req = new XMLHttpRequest();

		var URL = "https://netflixroulette.net/api/api.php?";

		var queryString = "type=json";
				if(this.getView().byId("__input0").getValue() !== ""){
					queryString += "&actor=" + this.getView().byId("__input0").getValue();
				}
		    
		 
		req.open("GET", URL + queryString.replace(/\s/ig, "%20"), false);
		req.send(null);
		
		if(req.status === 200){
			count = 0;
			var response = JSON.parse(req.responseText);
		 
		 	cast = response[count].show_cast;
		 	this.getView().byId("__area1").setValue("Schauspieler: " + cast);
		 	
		 	title = response[count].show_title;
		 	this.getView().byId("__input3").setValue("Titel: " + title);
		 	
		 	director = response[count].director;
		 	this.getView().byId("__input5").setValue("Regisseur: " + director);
		 	
		 	summary = response[count].summary;
		 	this.getView().byId("__area0").setValue("Handlung: " + summary);
		 	
		 	poster = response[count].poster;
		 	this.getView().byId("__image0").setSrc(poster);
		}
		
	}
	
	});
});
