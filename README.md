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


