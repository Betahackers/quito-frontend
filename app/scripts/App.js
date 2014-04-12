/*global NeuronalSynchrony, Backbone $*/

//NeuronalSynchrony = {};

(function () {
  'use strict';
  window.QuitoFrontend = new Backbone.Marionette.Application();

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
    mainRegion:"#content"
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

