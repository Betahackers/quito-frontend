/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

    QuitoFrontend.Collections.ArticleCollection = Backbone.Collection.extend({

      model: QuitoFrontend.Models.Article,
      url:"http://" + Config.DevProxy + "www.fromto.es/v1/articles.json",
      parse:function(results) {
        var result = results.articles;
        var article = _.pluck(result, 'article');
        return  article;
      }

    });

})();
