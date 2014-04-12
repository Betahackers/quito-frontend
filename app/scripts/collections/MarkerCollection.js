/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

    QuitoFrontend.Collections.MarkerCollection = Backbone.Collection.extend({

        model: QuitoFrontend.Models.Marker,
        url: '/json/markers.json'
    });

})();
