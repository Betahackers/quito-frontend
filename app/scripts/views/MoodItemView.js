/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.MoodItemView =  Backbone.Marionette.CompositeView.extend({
    tagName : 'li',
    template: JST['app/scripts/templates/MoodItemView.hbs'],

    initialize : function() {
      this.listenTo(this.model, 'change', this.render);
    },

    destroy : function() {
      this.model.destroy();
    },
    displayItem:  function() {
      console.log("display mood")
    }
  });
})();