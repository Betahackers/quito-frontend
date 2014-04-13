/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

  QuitoFrontend.Collections.MarkerCollection = Backbone.Collection.extend({
//    model: QuitoFrontend.Models.Marker,
    url: 'http://www.fromto.es/v1/articles.json',

    model: function(attrs, options) {
      return new QuitoFrontend.Models.Marker(attrs, options);
    },

    parse:function(results) {
      var markers = results.get("results.locations");
      return markers;
    }
  });

})();

