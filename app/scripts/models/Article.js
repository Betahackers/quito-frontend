/*global QuitoFrontend, Backbone*/

QuitoFrontend.Models = QuitoFrontend.Models || {};

(function () {
    'use strict';

    QuitoFrontend.Models.Article = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
