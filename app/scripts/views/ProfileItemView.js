/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.ProfileItemView =  Backbone.Marionette.CompositeView.extend({
    tagName : 'li',
    template: JST['app/scripts/templates/ProfileItemView.hbs'],

    initialize : function() {
      //this.bindTo(this.model, 'change', this.render, this);
      this.listenTo(this.model, 'change', this.render);
    },
    events : {
      'click' : 'displayItem'
    },
    displayItem:  function(e) {
      console.log("display profile")
      var profile = new QuitoFrontend.Models.Profile();
      var model = this.model;
      profile.set("first_name",model.get("first_name"))
      profile.set("last_name",model.get("last_name"))
      profile.set("articles",model.get("articles"))
      displayProfileView(profile)
    },
    destroy : function() {
      this.model.destroy();
    },
    onBeforeRender: function(){
//      this.model.set("index",this.options.itemIndex)
      $(this.el).attr('class','profileItem');
//      $(this.el).attr('style','background-color:' + rainbowPastel(this.model.get("len"), this.options.itemIndex));
    }
  });
})();