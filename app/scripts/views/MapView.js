/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.MapView = Backbone.Marionette.ItemView.extend({

    template: JST['app/scripts/templates/MapView.hbs'],

    events: {
      "click #helloworld": "helloworld"
    },
    helloworld: function() {
      console.log("MapView.")
    },
    initialize : function() {
      
      var mapOptions = {
        center: new google.maps.LatLng(41.39479, 2.1487679),
        zoom: 14
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    }

  });

})();
