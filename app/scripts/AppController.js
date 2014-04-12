/*global QuitoFrontend, Backbone*/

(function () {
  'use strict';

  QuitoFrontend.AppController = Backbone.Marionette.Controller.extend({

    //gets mapped to in AppRouter's appRoutes
    index:function () {
      console.log("i am home");
    },
    search: function (searchTerm) {
      console.log("Searching for " + searchTerm);

    }

  });

})();