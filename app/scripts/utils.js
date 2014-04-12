
  function initializeMap() {
      var mapOptions = {
          zoom: 14,
          center: new google.maps.LatLng(41.382555, 2.163403)
      }
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var markers = [
          {
              latitude: 41.390412,
              longitude: 2.157952,
              title: 'Espito Chupitos'
          },
          {
              latitude: 41.385244,
              longitude: 2.169797,
              title: "L'oveja Negra"
          },
          {
              latitude: 41.382555,
              longitude: 2.163403,
              title: "Fabrica Moritz"
          }
      ];

      for (var i=0;i<markers.length;i++)
      {

          var populationOptions = {
              strokeColor: '#000',
              strokeOpacity: 1,
              strokeWeight: 1,
              fillColor: '#35aeff',
              fillOpacity: 1,
              map: map,
              center: new google.maps.LatLng(markers[i].latitude, markers[i].longitude),
              radius: 100
          };
          // Add the circle for this city to the map.
          var circle = new google.maps.Circle(populationOptions);

          google.maps.event.addListener(circle, 'click', function() {
              alert("hey");
          });
      }


  }



  $('#happy').on('click', function (e) {
    console.log("click hello man.")
    var model = new QuitoFrontend.Models.Profile();
    model.set("name","Jorge")
    model.set("desc","He is a smart fella")
    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
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
