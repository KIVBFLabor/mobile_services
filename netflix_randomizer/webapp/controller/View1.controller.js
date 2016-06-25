sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("netflix_randomizer.controller.View1", {
		/**
	*@memberOf netflix_randomizer.controller.View1
	*/
on_search: function () {
	
		var cast;
	
		var req = new XMLHttpRequest();

		var URL = "https://netflixroulette.net/api/api.php?";
		var queryType = "actor=";
		var query = "benedict+cumberbatch";


		var queryString = "type=json";
		            queryString += "&actor=statham";
		            queryString += "&year=2015";
		 
		
		
		
		req.open("GET", URL + queryString.replace(/\s/ig, "%20"), true);
		req.onreadystatechange = function() {
		  if (req.readyState !== 4) {
		                return;
		            }
		
		            if (req.status !== 200) {
		                throw new Error("Unexpected HTTP Status Code (" + req.status + ")");
		            }
		  
			var response = JSON.parse(req.responseText);
			cast = response[0].show_cast;
			
		};
		req.send();
		
		//this.getView().byID("__area1").setValue(cast);
		alert(cast);
}
	});
});
