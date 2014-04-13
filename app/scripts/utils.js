
  function initializeMap() {
      var mapOptions = {
          center: new google.maps.LatLng(41.39479, 2.1487679),
          zoomControl: false,
          mapTypeControl: false,
          panControl: false,
          streetViewControl: false,
          zoom: 14
      }
      
    QuitoFrontend.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var mapType = new google.maps.StyledMapType([{ "stylers": [{ "saturation": -100 }] }], {});
    QuitoFrontend.map.mapTypes.set('maptype', mapType);
    QuitoFrontend.map.setMapTypeId('maptype');
  }

  $('#Illegal').on('click', function (e) {
    console.log("click Illegal man.")
    fetchMarker("Illegal","mood");
  })
  $('#Sociable').on('click', function (e) {
    console.log("click Sociable man.")
    fetchMarker("Sociable","mood");
  })
  $('#Adventure').on('click', function (e) {
    console.log("click Adventure man.")
    fetchMarker("Adventure","mood");
  })
  $('#Active').on('click', function (e) {
    console.log("click Active man.")
    fetchMarker("Active","mood");
  })
  $('#Cultural').on('click', function (e) {
    console.log("click Cultural man.")
    fetchMarker("Cultural","mood");
  })
  $('#Romantic').on('click', function (e) {
    console.log("click Romantic man.")
    fetchMarker("Romantic","mood");
  })
  $('#Relaxed').on('click', function (e) {
    console.log("click Relaxed man.")
    fetchMarker("Relaxed","mood");
  })
  $('#Solitary').on('click', function (e) {
    console.log("click Solitary man.")
    fetchMarker("Solitary","mood");
  })

//  {"categories":["Eat","Drink","Healthy Life","Culture","Shopping","Dancing","Live Music","Walks"],

  $('#Eat').on('click', function (e) {
    console.log("click Eat man.")
    fetchMarker("Eat","categories");
  })
  $('#Drink').on('click', function (e) {
    console.log("click Drink man.")
    fetchMarker("Drink","categories");
  })
  $('#HealthyLife').on('click', function (e) {
    console.log("click Healthy Life man.")
    fetchMarker("Healthy Life","categories");
  })
  $('#Culture').on('click', function (e) {
    console.log("click Culture man.")
    fetchMarker("Culture","categories");
  })
  $('#Shopping').on('click', function (e) {
    console.log("click Shopping man.")
    fetchMarker("Shopping","categories");
  })
  $('#Dancing').on('click', function (e) {
    console.log("click Dancing man.")
    fetchMarker("Dancing","categories");
  })
  $('#LiveMusic').on('click', function (e) {
    console.log("click Live Music man.")
    fetchMarker("Live Music","categories");
  })
  $('#Walks').on('click', function (e) {
    console.log("click Walks man.")
    fetchMarker("Walks","categories");
  })


  $("#profilesLink").click(function () {
    if (!$(".profiles-container").hasClass("in")) {
      var windowHeight = $(window).height();
      var boxTop = $(".profiles-box").offset().top;
      var boxHeight = $(".profiles-box").outerHeight();
      var newHeight = windowHeight - (boxTop + boxHeight);
      $(".profiles-expanded").css("height", newHeight + "px");
    }

    $(".profiles-container").collapse("toggle");
  });

  function fetchMarker(markerType, type) {
    var url = "http://127.0.0.1:9292/www.fromto.es/v1/locations.json?"+type+"=" + markerType
    var jqxhr = $.get(url, function (data) {
      console.log("success");
      QuitoFrontend.markers = data
      //var markers = new QuitoFrontend.Collections.MarkerCollection(QuitoFrontend.markers)
      var markers = data.locations;
//    markers.fetch( {
//      success: function(record){
//        console.log("Fetched record: " + JSON.stringify(record));
//      }})
      for (var i = 0; i < markers.length; i++) {
//        var marker = markers.models[i]
        var marker = markers[i].location
        var populationOptions = {
          strokeColor: '#000',
          strokeOpacity: 1,
          strokeWeight: 1,
          fillColor: '#35aeff',
          fillOpacity: 1,
          map: QuitoFrontend.map,
//          center: new google.maps.LatLng(marker.get("latitude"), marker.get("longitude")),
          center: new google.maps.LatLng(marker.latitude, marker.longitude),
          radius: 100
        };
        // Add the circle for this city to the map.
        var circle = new google.maps.Circle(populationOptions);
        circle.marker = marker
        google.maps.event.addListener(circle, 'click', function () {
          console.log("hey");
          // http://www.fromto.es/v1/articles/1.json
          // http://www.fromto.es/v1/locations/1.json
          var articleList = []
          var articles = this.marker.articles;

          QuitoFrontend.ArticleList = new QuitoFrontend.Collections.ArticleCollection()
          QuitoFrontend.ArticleList.fetch (
            {
              success: function(collection, response, options) {
                console.log("item count: " + collection.length);
//                QuitoFrontend.ProfileListView = new QuitoFrontend.Views.ProfileListView({collection:QuitoFrontend.ProfileList,itemView : QuitoFrontend.Views.ProfileItemView});
//                QuitoFrontend.profileListRegion.show(QuitoFrontend.ProfileListView)
//                var model = new QuitoFrontend.Models.Profile({url:"http://127.0.0.1:9292/www.fromto.es/v1/locations/1.json"});
                var model = new QuitoFrontend.Models.Profile();
//                model.set("name",this.marker.name)
                model.set("articles",QuitoFrontend.ArticleList)
                model.set("desc","Dancing about Architecture")
                displayProfileView(model)
              }}
          )


//          for (var i = 0; i < articles.length; i++) {
//            var article = article[i];
//            var articleId = article
//            var jqxhr = $.get("http://127.0.0.1:9292/www.fromto.es/v1/locations.json", function (data) {
//
//              var model = new QuitoFrontend.Models.Profile({url:"http://www.fromto.es/v1/locations/1.json"});
//              model.set("name",this.marker.name)
//              model.set("articles",articleList)
//              model.set("desc","Dancing about Architecture")
//              displayProfileView(model)
//
//            })
//          }


        });
      }
    }
    )
      .done(function () {
        console.log("second success");
      })
      .fail(function (e) {
        console.log("error");
      })
      .always(function () {
        console.log("finished");
      });
  }

  function displayProfileView(model) {

    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
  }

  function rainbowPastel(numOfSteps, step) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript

    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
      case 0: r = 1, g = f, b = 0; break;
      case 1: r = q, g = 1, b = 0; break;
      case 2: r = 0, g = 1, b = f; break;
      case 3: r = 0, g = q, b = 1; break;
      case 4: r = f, g = 0, b = 1; break;
      case 5: r = 1, g = 0, b = q; break;
    }
//  console.log("numOfSteps: " + numOfSteps + " step: " + step + "h: " + h + " i: " + i +" f: " + f +" q: " + q + " i%6: " + i%6 + " r: " + r + " g: " + g + " b: " + b)
//  var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    var red = ~ ~(r * 255);
    var green = ~ ~(g * 255);
    var blue = ~ ~(b * 255);
    // pastel kudos: http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
    // mix the color - in this case, white (255,255,255)

    red = (red + 255) / 2;
    green = (green + 255) / 2;
    blue = (blue + 255) / 2;

    var c = "#" + ("00" + (~~red).toString(16)).slice(-2) + ("00" + (~~green).toString(16)).slice(-2) + ("00" + (~~blue).toString(16)).slice(-2);
    return (c);
  }
  
  