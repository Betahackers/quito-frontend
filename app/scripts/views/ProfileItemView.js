/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.ProfileItemView =  Backbone.Marionette.CompositeView.extend({
    tagName : 'li',
    template: JST['app/scripts/templates/ProfileItemView.hbs'],

//    events : {
//      'click .profile' : 'displayItem'
//    },

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