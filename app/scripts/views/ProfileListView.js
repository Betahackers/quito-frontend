/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.ProfileListView = Backbone.Marionette.CollectionView.extend({

    tagName: "ul",
    template: JST['app/scripts/templates/ProfileListView.hbs'],
    itemView : QuitoFrontend.Views.ProfileItemView,
//    itemViewContainer : '#shortProfiles',
    onBeforeRender: function(){
//      this.model.set("index",this.options.itemIndex)
      $(this.el).attr('id','shortProfiles');
//      $(this.el).attr('style','background-color:' + rainbowPastel(this.model.get("len"), this.options.itemIndex));
    }
//    events : {
//      'click .profileItem' : 'displayItem'
//    },


  });

})();
