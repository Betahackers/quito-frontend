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
      
      initializeMap()
    }

  });

})();
