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
    selectedProfile: null,

    onShow: function(){
//        var panelBackgroundColors = QuitoFrontend.backgroundColors;
        var panelBackgroundColors = this.model.get("panelBackgroundColors");
      $(".profile").css("background-color", panelBackgroundColors[0]);
        $(".profile-content").css("background-color", panelBackgroundColors[1]);
    }

  });

})();
