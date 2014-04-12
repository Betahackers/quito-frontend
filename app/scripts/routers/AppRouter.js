/*global QuitoFrontend, Backbone*/

QuitoFrontend.Routers = QuitoFrontend.Routers || {};

(function () {
  'use strict';

  QuitoFrontend.Routers.AppRouter = Backbone.Marionette.AppRouter.extend({
    //"index" must be a method in AppRouter's controller
    appRoutes: {
      "":                                       "home",
      "home":                           "home",
      "home/:endkey":                           "home",
      "search/:query":        						      "search"    		          // #search
    }
  });

})();