/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.CategoryView = Backbone.Marionette.ItemView.extend({

    template: JST['app/scripts/templates/CategoryView.hbs'],

    events: {
      "click #helloworld": "helloworld"
    },
    helloworld: function() {
      console.log("CategoryView.")
    }

  });

})();
