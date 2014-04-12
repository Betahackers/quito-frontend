/*global QuitoFrontend, Backbone*/

QuitoFrontend.Routers = QuitoFrontend.Routers || {};

(function () {
  'use strict';

  QuitoFrontend.Routers.AppRouter = Backbone.Marionette.AppRouter.extend({
    //"index" must be a method in AppRouter's controller
    appRoutes: {
      "":                                       "index",
      "index":                           "index",
      "home":                           "home",
      "home/:endkey":                           "home",
      "search/emo/:query":        						      "search",  		          // #search
      "search/profile/:query":        						      "profile",    		          // #search
      "search/category/:query":        						      "category"    		          // #search
    }
  });

})();