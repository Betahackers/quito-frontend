/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

    QuitoFrontend.Collections.MoodCollection = Backbone.Collection.extend({

      model: QuitoFrontend.Models.Mood,
      url:"json/moods.json"
    });

})();
