/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.ProfileItemView =  Backbone.Marionette.ItemView.extend({
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
      profile.set("firstName",model.get("first_name"))
      profile.set("lastName",model.get("last_name"))
      profile.set("profession",model.get("profession"))
      profile.set("nationality",model.get("nationality"))
      profile.set("about",model.get("about"))
      profile.set("expert_in",model.get("expert_in"))
      if (model.get("articles") !== null) {
        var articles = model.get("articles")
        profile.set("article", articles.article)
      }

      var userId = model.get("id")
      displayProfileView(profile)
//      fetchMarker(userId,"users");
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