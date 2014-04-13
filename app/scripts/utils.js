
  function initializeMap() {
      var mapOptions = {
          zoom: 14,
          center: new google.maps.LatLng(41.382555, 2.163403)
      }
    QuitoFrontend.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  }

  $('#happy').on('click', function (e) {
    console.log("click hello man.")
    fetchMarker();
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

  function fetchMarker() {
    var jqxhr = $.get("/json/markers.json", function (data) {
      console.log("success");
      QuitoFrontend.markers = data
      var markers = new QuitoFrontend.Collections.MarkerCollection(QuitoFrontend.markers)
//    markers.fetch( {
//      success: function(record){
//        console.log("Fetched record: " + JSON.stringify(record));
//      }})
      for (var i = 0; i < markers.length; i++) {
        var marker = markers.models[i]
        var populationOptions = {
          strokeColor: '#000',
          strokeOpacity: 1,
          strokeWeight: 1,
          fillColor: '#35aeff',
          fillOpacity: 1,
          map: QuitoFrontend.map,
          center: new google.maps.LatLng(marker.get("latitude"), marker.get("longitude")),
          radius: 100
        };
        // Add the circle for this city to the map.
        var circle = new google.maps.Circle(populationOptions);
        google.maps.event.addListener(circle, 'click', function () {
          console.log("hey");
          var model = new QuitoFrontend.Models.Profile();
          model.set("name","Architecture")
          model.set("desc","Dancing about Architecture")
          displayProfileView(model)
        });
      }
    })
      .done(function () {
        console.log("second success");
      })
      .fail(function () {
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
