sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
			"use strict";
			return Controller.extend("NetflixNeu.controller.View1", {
					ComboSelect: function(){
						window.select = this.getView().byId("__box0").getSelectedKey();
						//window.select = oEvent.oSource.getSelectedItemId();
					},
					
					onInit: function() {
					},
//Suche Filmliste (Data Binding)
					suche: function() {
							var req = new XMLHttpRequest();
							var URL = "https://netflixroulette.net/api/api.php?";
							
							var selection = "&" + window.select + "=";
							
							var queryString = "type=json";
							queryString += selection + this.getView().byId("__input0").getValue();
							req.open("GET", URL + queryString.replace(/\s/gi, "%20"), false);
							req.send(null);
							
							if (req.status === 200) {
								var model = new sap.ui.model.json.JSONModel();
								model.setJSON(req.responseText);
								this.getView().setModel(model);
							}
					} ,
//Suche zufälliger Film				
					zufallsfilm: function() {

							var cast;
							var title;
							var director;
							var summary;
							var poster;
							var rating;

							var count;

							var req = new XMLHttpRequest();

							var URL = "https://netflixroulette.net/api/api.php?";

							var queryString = "type=json";
							
							var selection = "&" + window.select + "=";
					
							queryString += selection + this.getView().byId("__input0").getValue();
							
							req.open("GET", URL + queryString.replace(/\s/ig, "%20"), false);
							req.send(null);
//Ausgabe
							if (req.status === 200) {
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
								
								rating = response[count].rating;
								this.getView().byId("__area2").setValue("Bewertung: " + rating);
							}

						}
					});

			});