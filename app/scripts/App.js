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


  QuitoFrontend.init = function () {
    'use strict';
    console.log('Hello from Backbone Betafolk!');
  }

  //Organize Application into regions corresponding to DOM elements
  //Regions can contain views, Layouts, or subregions nested as necessary
  QuitoFrontend.addRegions({
    headerRegion:"header",
    mainRegion:"#content",
    creditsRegion:"#credits",
    seqPanelRegion:"#sequencer_panel"
  });


  QuitoFrontend.addInitializer(function () {
    Backbone.history.start();
  });


//  Local database handle
//  QuitoFrontend.db = new PouchDB('BetahackDb')
//  Backbone.sync = BackbonePouch.sync({db: QuitoFrontend.db});
//  Backbone.Model.prototype.idAttribute = '_id';


  return QuitoFrontend;

})();

$(document).ready(function () {
  'use strict';
  QuitoFrontend.init();
  QuitoFrontend.HomeView = new QuitoFrontend.Views.HomeView();
//  NeuronalSynchrony.creditsRegion.show(NeuronalSynchrony.MainMenuView)
//
//  NeuronalSynchrony.Song = new NeuronalSynchrony.Collections.SongCollection;
//  NeuronalSynchrony.SequencerLayout = new NeuronalSynchrony.Layouts.SequencerLayout();
//  NeuronalSynchrony.SequencerPanel = new NeuronalSynchrony.Views.SequencerPanelView();
//  Tangerine.initdoc();
});

