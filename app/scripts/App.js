/*global NeuronalSynchrony, Backbone $*/

//NeuronalSynchrony = {};

(function () {
  'use strict';

  window.QuitoFrontend = new Backbone.Marionette.Application();

  QuitoFrontend.DevProxy = "127.0.0.1:9292/";

  QuitoFrontend.Models = {}
  QuitoFrontend.Collections = {}
  QuitoFrontend.Views = {}
  QuitoFrontend.Routers = {}
  QuitoFrontend.Layouts = {};

//  QuitoFrontend.init = function () {
//    'use strict';
//    console.log('Hello from Backbone Betafolk!');
//  }

  //Organize Application into regions corresponding to DOM elements
  //Regions can contain views, Layouts, or subregions nested as necessary
  QuitoFrontend.addRegions({
    headerRegion:"header",
    mainRegion:"#content",
    profileListRegion:"#profilesList",
    moodListRegion: "#moodsList"
  });


  QuitoFrontend.addInitializer(function () {
//    Backbone.history.start();
    QuitoFrontend.appRouter = new QuitoFrontend.Routers.AppRouter({
      controller:new QuitoFrontend.AppController()
    });
  });

  QuitoFrontend.on("initialize:after", function(){
    console.log('Hello from Backbone Betafolk!');
    if(Backbone.history){
      Backbone.history.start();
    }
    QuitoFrontend.ProfileList = new QuitoFrontend.Collections.ProfileCollection()
    QuitoFrontend.ProfileList.fetch (
      {
        success: function(collection, response, options) {
          console.log("item count: " + collection.length);
          QuitoFrontend.ProfileListView = new QuitoFrontend.Views.ProfileListView({collection:QuitoFrontend.ProfileList,itemView : QuitoFrontend.Views.ProfileItemView});
          QuitoFrontend.profileListRegion.show(QuitoFrontend.ProfileListView)
        }}
    )

//    QuitoFrontend.MoodList = new QuitoFrontend.Collections.MoodCollection()
//    QuitoFrontend.MoodList.fetch (
//      {
//        success: function(collection, response, options) {
//          console.log("mood count: " + collection.length);
//          QuitoFrontend.MoodListView = new QuitoFrontend.Views.MoodListView({collection:QuitoFrontend.MoodList,itemView : QuitoFrontend.Views.MoodItemView});
//          QuitoFrontend.moodListRegion.show(QuitoFrontend.MoodListView)
//        },
//        error: function (p1, p2) {
//            console.log("ERROR!!! ", p1, p2);
//        }
//    }
//    )

  });


//  Local database handle
//  QuitoFrontend.db = new PouchDB('BetahackDb')
//  Backbone.sync = BackbonePouch.sync({db: QuitoFrontend.db});
//  Backbone.Model.prototype.idAttribute = '_id';

  return QuitoFrontend;

})();

$(document).ready(function () {
  'use strict';
//  QuitoFrontend.init();
  QuitoFrontend.start()
//
//  NeuronalSynchrony.Song = new NeuronalSynchrony.Collections.SongCollection;
//  NeuronalSynchrony.SequencerLayout = new NeuronalSynchrony.Layouts.SequencerLayout();
//  NeuronalSynchrony.SequencerPanel = new NeuronalSynchrony.Views.SequencerPanelView();
//  Tangerine.initdoc();
});

