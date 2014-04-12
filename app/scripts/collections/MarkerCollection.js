/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

  QuitoFrontend.Collections.MarkerCollection = Backbone.Collection.extend({
//    model: QuitoFrontend.Models.Marker,
    url: '/json/markers.json',

    model: function(attrs, options) {
      return new QuitoFrontend.Models.Marker(attrs, options);
    }

//    parse:function(results) {
//      return _.pluck(results, 'value');
//    }
  });

})();

