/*global QuitoFrontend, Backbone*/

(function () {
  'use strict';

  QuitoFrontend.AppController = Backbone.Marionette.Controller.extend({

    //gets mapped to in AppRouter's appRoutes
    index:function () {
      console.log("i am index");

      QuitoFrontend.HomeView = new QuitoFrontend.Views.HomeView();
      QuitoFrontend.mainRegion.show(QuitoFrontend.HomeView)
    },
    home:function () {
      console.log("i am home");

      QuitoFrontend.HomeView = new QuitoFrontend.Views.HomeView();
      QuitoFrontend.mainRegion.show(QuitoFrontend.HomeView)
    },
    search: function (searchTerm) {
      console.log("Searching for " + searchTerm);

      QuitoFrontend.MapView = new QuitoFrontend.Views.MapView();
      QuitoFrontend.mainRegion.show(QuitoFrontend.MapView)
    },
    profile: function (searchTerm) {
      console.log("Searching for " + searchTerm);

      QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView();
      QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
    },
    category: function (searchTerm) {
      console.log("Searching for " + searchTerm);

      QuitoFrontend.CategoryView = new QuitoFrontend.Views.CategoryView();
      QuitoFrontend.mainRegion.show(QuitoFrontend.CategoryView)

    }

  });

})();