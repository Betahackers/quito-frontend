/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

    QuitoFrontend.Collections.ArticleCollection = Backbone.Collection.extend({

      model: QuitoFrontend.Models.Article
//      url:"http://127.0.0.1:9292/www.fromto.es/v1/users.json",
//      parse:function(results) {
//        var markers = results.users
//        return markers;
//      }

    });

})();
