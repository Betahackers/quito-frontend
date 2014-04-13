/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.MoodListView = Backbone.Marionette.CompositeView.extend({

    tagName: "ul",
    template: JST['app/scripts/templates/MoodListView.hbs'],
    itemView : QuitoFrontend.Views.MoodItemView,
    itemViewContainer : '#moodList'

  });

})();
