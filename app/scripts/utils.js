
  function initializeMap() {
      var mapOptions = {
          center: new google.maps.LatLng(41.39479, 2.1487679),
          zoomControl: false,
          mapTypeControl: false,
          panControl: false,
          zoom: 14
      }
      
    QuitoFrontend.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var mapType = new google.maps.StyledMapType([{ "stylers": [{ "saturation": -100 }] }], {});
    QuitoFrontend.map.mapTypes.set('maptype', mapType);
    QuitoFrontend.map.setMapTypeId('maptype');
  }

  $('#happy').on('click', function (e) {
    console.log("click hello man.")
    fetchMarker("happy");
  })

  $('#love').on('click', function (e) {
    console.log("click love man.")
    var model = new QuitoFrontend.Models.Profile();
    model.set("name","Lover")
    model.set("desc","He is a lovely fella")
    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
  })

  $('#sad').on('click', function (e) {
    console.log("click sad man.")
    var model = new QuitoFrontend.Models.Profile();
    model.set("name","Saddy")
    model.set("desc","He is a sad fella")
    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
  })

  $('#anx').on('click', function (e) {
    console.log("click anx man.")
    var model = new QuitoFrontend.Models.Profile();
    model.set("name","Anxious")
    model.set("desc","He is an anxious fella")
    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
  })

  $('#despair').on('click', function (e) {
    console.log("click desparate man.")
    var model = new QuitoFrontend.Models.Profile();
    model.set("name","Despair")
    model.set("desc","He is a desperate fella")
    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
  })

  $('#arch').on('click', function (e) {
    console.log("click arch man.")
    var model = new QuitoFrontend.Models.Profile();
    model.set("name","Architecture")
    model.set("desc","Dancing about Architecture")
    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
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

  function fetchMarker(markerType) {
    var jqxhr = $.get("http://127.0.0.1:9292/rawgit.com/Betahackers/quito-backend/master/examples/locations.json", function (data) {
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
        google.maps.event.addListener(circle, 'click', function () {
          console.log("hey");
          var model = new QuitoFrontend.Models.Profile();
          model.set("name",marker.name)
          model.set("desc","Dancing about Architecture")
          displayProfileView(model)
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