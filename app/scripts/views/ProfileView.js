/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.ProfileView = Backbone.Marionette.ItemView.extend({

    template: JST['app/scripts/templates/ProfileView.hbs'],

//    events: {
//      "click #helloworld": "helloworld"
//    },
    helloworld: function() {
      console.log("ProfileView.")
    },
    selectedProfile: null

  });

})();
