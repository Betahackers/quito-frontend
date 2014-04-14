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

# Deployment

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


