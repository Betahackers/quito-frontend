/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  return Backbone.Marionette.CompositeView.extend({
    tagName : 'tr',
    //template : Handlebars.compile($("#search-template").html()),
    template: JST['app/scripts/templates/ProfileItemView.hbs'],

    events : {
      'click .profile' : 'displayItem'
    },

    initialize : function() {
      //this.bindTo(this.model, 'change', this.render, this);
      this.listenTo(this.model, 'change', this.render);
    },

    destroy : function() {
      this.model.destroy();
    },
    displayItem:  function() {
      console.log("display")
    }
  });
})();