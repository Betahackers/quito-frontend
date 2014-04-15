/*global QuitoFrontend, Backbone*/

QuitoFrontend.Collections = QuitoFrontend.Collections || {};

(function () {
    'use strict';

    QuitoFrontend.Collections.ProfileCollection = Backbone.Collection.extend({

      model: QuitoFrontend.Models.Profile,
      url:"http://" + Config.DevProxy + "www.fromto.es/v2/users.json",
      parse:function(results) {
        var markers = results.users
        return markers;
      }

    });

})();
