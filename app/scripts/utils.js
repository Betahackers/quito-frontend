
  function initializeMap() {
    var mapOptions = {
      center: new google.maps.LatLng(41.39479, 2.1487679),
      zoom: 14
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
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
