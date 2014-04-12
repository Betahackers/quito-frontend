/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

    QuitoFrontend.Collections.ProfileCollection = Backbone.Collection.extend({

        model: QuitoFrontend.Models.ProfileCollection

    });

})();
