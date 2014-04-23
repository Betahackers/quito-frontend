fromto.es front-end
==============

This project is for the front-end for the fromto.es website. We used [generator-backbone](https://github.com/yeoman/generator-backbone)
to generate scaffolding and then modified some of views to use [Marionnette](http://marionettejs.com/) views.

# Preparation

Before building this app, you should at least have nodejs/npm and bower installed. If you don't already have bower,
install [yeoman](http://yeoman.io/index.html) - it automatically installs bower and you may use it to generate scaffolding.

    npm install -g yo

This app used the generator-backbone for yeoman to generate scaffolding. It is not necessary to install it if you're not
creating any new backbone models, views, or collections. If you are creating new models, there are some examples how to use this generator later in the document.

    npm install -g generator-backbone

In development use corsproxy to work around [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) issues.
All of the URLS's that make AJAX requests should pass through the cors proxy in order to work.

    npm install -g corsproxy

# Install dependencies

Once you've cloned the source code, cd to the source and run these commands in order to install the dependencies:

    npm install
    bower install

# Configure

Open app/scripts/config.js and uncomment the following line in order to use the cors proxy.
    //Config.DevProxy = "127.0.0.1:9292/";

# Run
    corsproxy (in another shell)
    grunt serve

# Development

## URLS for cors proxy

To use the corsproxy-enabled url in your code, insert Config.DevProxy into the urls that make AJAX requests.

    var url = "http://" + Config.DevProxy + "www.fromto.es/v2/locations.json?"+type+"=" + markerType

## Generate backbone models:

    yo backbone:model Profile
    yo backbone:view ProfileView
    yo backbone:collection ProfileCollection

# App Flow

The app bootstraps from App.js. Although there is an AppController and AppRouter, the app doesn't really need them.
The app is initialised in App.js:

    QuitoFrontend.on("initialize:after", function(){

which fetches the ProfileList, pops them into a ProfileListView, and displays them in QuitoFrontend.profileListRegion.

Most of the app logic is in utils.js, contrary to standard backbone/Marionette syntax. Most of the app events are detected here.
This includes clicks on the menu items in the left nav as well as the map item clicks. TODO: migrate these events into the
views that should be responsible for them.

# Prepare the build

Once you're done w/ development, you must prepare the code for deployment. Remove the proxy url from the ajax requests: "127.0.0.1:9292/"

    var jqxhr = $.get("http://127.0.0.1:9292/rawgit.com/Betahackers/quito-backend/master/examples/locations.json", function (data) {

    //Config.DevProxy = "127.0.0.1:9292/";
    Config.DevProxy = "";

To deploy, run

  grunt build

This will generate the templates.js file and minimise the javascript. The "uglyfy" task is currently commented out -
see grunt.registerTask in Gruntfile.js.

The files for distribution are generated to the "dist" directory. If some of your files/media assets are not being copied
over to dist, check the "copy" task.

Do a quick test locally to see if it working. Your AJAX calls won't work (CORS - you did comment out the line in config.js didn't you?)
but it is nice to confirm. A simple test server is [http-server](https://www.npmjs.org/package/http-server).

    npm install -g http-server

In another terminal cd to dist and enter

    http-server .

Then you can test it out on http://localhost:8080/app.html

# Deploy to heraku

Clone the keraku repository:

    heroku git:clone --app quito-backend

The app is deployed in the quito-backend/public.

If you're updating the app, do a git pull first!

    git pull

If only javascript was changed, you typically only need to copy one js file from scripts and delete the old version on heraku.

    git status
    git add -A
    git commit -a -m "Updates to Profiles and added Itineraries"
    git push heroku master

TBD - automate this!
