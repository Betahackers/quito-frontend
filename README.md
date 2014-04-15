Betaguide front-end
==============

#Setup 

    npm install
    bower install

In development use corsproxy to work around CORS issues. wiki: [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
    npm install -g corsproxy

#Run
    corsproxy (in another shell)
    grunt serve

# Development

To use the corsproxy-enabled url in your code, insert Config.DevProxy into your urls:

    var url = "http://" + Config.DevProxy + "www.fromto.es/v2/locations.json?"+type+"=" + markerType + "&include_articles=true"

# Prepare the build

Remove the proxy url from the ajax requests: "127.0.0.1:9292/"

    var jqxhr = $.get("http://127.0.0.1:9292/rawgit.com/Betahackers/quito-backend/master/examples/locations.json", function (data) {

    //Config.DevProxy = "127.0.0.1:9292/";
    Config.DevProxy = "";

To deploy, run grunt deploy. This will generate the templates.js file and minimise the javascript. That task can do a lot more - see
grunt.registerTask in Gruntfile.js

To a quick test locally to see if it working. Your AJAX calls won't work (CORS) but it is nice to confirm. In another terminal
cd to dist

    http-server .

The you can test it out on http://localhost:8080/app.html

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


