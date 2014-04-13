/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.ProfileListView = Backbone.Marionette.CompositeView.extend({

    tagName: "ul",
    template: JST['app/scripts/templates/ProfileListView.hbs'],
    itemView : QuitoFrontend.Views.ProfileItemView,
    itemViewContainer : '#shortProfiles'

  });

})();
