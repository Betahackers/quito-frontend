/*global QuitoFrontend, Backbone, JST*/

QuitoFrontend.Views = QuitoFrontend.Views || {};

(function () {
  'use strict';

  QuitoFrontend.Views.ProfileListView = Backbone.Marionette.CompositeView.extend({

    template: JST['app/scripts/templates/ProfileListView.hbs'],
    itemView : ItemView,
    itemViewContainer : '#incidents'

  });

})();
