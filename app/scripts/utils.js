
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
    fetchMarker("lawbreaker","by_mood");
  })
  $('#Sociable').on('click', function (e) {
    console.log("click Sociable man.")
    fetchMarker("social","by_mood");
  })
  $('#Adventure').on('click', function (e) {
    console.log("click Adventure man.")
    fetchMarker("adventurous","by_mood");
  })
  $('#Active').on('click', function (e) {
    console.log("click Active man.")
    fetchMarker("energetic","by_mood");
  })
  $('#Cultural').on('click', function (e) {
    console.log("click Cultural man.")
    fetchMarker("intellectual","by_mood");
  })
  $('#Romantic').on('click', function (e) {
    console.log("click Romantic man.")
    fetchMarker("romantic","by_mood");
  })
  $('#Relaxed').on('click', function (e) {
    console.log("click Relaxed man.")
    fetchMarker("relaxed","by_mood");
  })
  $('#Solitary').on('click', function (e) {
    console.log("click Solitary man.")
    fetchMarker("lonely","by_mood");
  })

//  {"categories":["Eat","Drink","Healthy Life","Culture","Shopping","Dancing","Live Music","Walks"],

  $('#Eat').on('click', function (e) {
    console.log("click Eat man.")
    fetchMarker("food","by_category");
  })
  $('#Drink').on('click', function (e) {
    console.log("click Drink man.")
    fetchMarker("drinks","by_category");
  })
  $('#HealthyLife').on('click', function (e) {
    console.log("click Healthy Life man.")
    fetchMarker("healthy_life","by_category");
  })
  $('#Culture').on('click', function (e) {
    console.log("click Culture man.")
    fetchMarker("culture","by_category");
  })
  $('#Shopping').on('click', function (e) {
    console.log("click Shopping man.")
    fetchMarker("shopping","by_category");
  })
  $('#Dancing').on('click', function (e) {
    console.log("click Dancing man.")
    fetchMarker("dancing","by_category");
  })
  $('#LiveMusic').on('click', function (e) {
    console.log("click Live Music man.")
    fetchMarker("music","by_category");
  })
  $('#Walks').on('click', function (e) {
    console.log("click Walks man.")
    fetchMarker("have_a_stroll","by_category");
  })
  $('#alternative').on('click', function (e) {
    console.log("click alternative man.")
    fetchMarker("alternative","by_category");
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
    $('#ProfileArticlePanel').hide()
    var url = "http://" + Config.DevProxy + "www.fromto.es/v2/locations.json?"+type+"=" + markerType + "&include_articles=true"
    var jqxhr = $.get(url, function (data) {
      console.log("success");
      //QuitoFrontend.markers = data
      //var markers = new QuitoFrontend.Collections.MarkerCollection(QuitoFrontend.markers)
      QuitoFrontend.markers = data.locations;

        var model = new QuitoFrontend.Models.Profile();
        if (typeof QuitoFrontend.markers[0].location.articles !== 'undefined') {
          var user = QuitoFrontend.markers[0].location.articles[0].article.user;
          var userThumbnailUrl = "http://www.fromto.es/images/fallback/thumb_avatar.jpg";
          if (user.avatar_url_suffix !== "avatar.jpg") {
            userThumbnailUrl = "http://www.fromto.es" + data.article.user.avatar_url_prefix + data.article.user.avatar_url_suffix;
          }
          model.set("user",user)
          model.set("userThumbnailUrl",userThumbnailUrl)

          if (type === 'by_user') {
            displayProfileView(model)
          }
        }

        if (QuitoFrontend.markerDots) {
          for (var i = 0; i < QuitoFrontend.markerDots.length; i++) {
            QuitoFrontend.markerDots[i].setMap(null);
          }
        }

      QuitoFrontend.markerDots = [];

      for (var i = 0; i < QuitoFrontend.markers.length; i++) {
        var marker = QuitoFrontend.markers[i].location

        var markerDot = new google.maps.Marker({
            position: new google.maps.LatLng(marker.latitude, marker.longitude),
            map: QuitoFrontend.map,
            icon: 'marker-images/point_' + type + '.png',
            marker: marker
        });
        
        QuitoFrontend.markerDots.push(markerDot);

        google.maps.event.addListener(markerDot, 'click', function () {
          // http://www.fromto.es/v1/articles/1.json
          // http://www.fromto.es/v1/locations/1.json
          var articleList = []
          var articles = this.marker.articles;
          var model = new QuitoFrontend.Models.Profile();
          var foursquare = {};
          var article = this.marker.articles[0]
          if (typeof article !== 'undefined') {
            var articleId = article.article.id;
            url = "http://" + Config.DevProxy + "www.fromto.es/v2/articles/" + articleId + ".json?include_foursquare=true"
            var jqxhr = $.get(url, function (data) {
              console.log("success");
              model.set("user",data.article.user)
              // 			<img class="profile-image" src="http://www.fromto.es{{user.avatar_url_prefix}}{{user.avatar_url_suffix}}" />
              var userThumbnailUrl = "http://www.fromto.es/images/fallback/thumb_avatar.jpg";
              if (data.article.user.avatar_url_suffix !== "avatar.jpg") {
                userThumbnailUrl = "http://www.fromto.es" + data.article.user.avatar_url_prefix + data.article.user.avatar_url_suffix;
              }
              model.set("userThumbnailUrl",userThumbnailUrl)
              model.set("firstName",data.article.user.first_name)
              model.set("lastName",data.article.user.last_name)
              model.set("article",data.article)
              model.set("moods",data.article.moods)
              //220x120
//            width220
              if (typeof data.article.locations === 'undefined') {
                var photosTree = data.article.locations[0].location.foursquare.photos.groups[0].items[1]
                var photoUrlOrig = photosTree.prefix + "width220" + photosTree.suffix
                var photoUrlArr = photoUrlOrig.split("://");
                var photoUrl = ""
                if (Config.DevProxy.length > 0) {
                  photoUrl = "http://" + Config.DevProxy + photoUrlArr[1]
                } else {
                  photoUrl = photoUrlOrig
                }
                foursquare.photoUrl = photoUrl;
                foursquare.name = data.article.locations[0].location.foursquare.name;
                model.set("foursquare",foursquare)
              }
              displayProfileView(model)
            })
          } else {
            foursquare.name = this.marker.name
            foursquare.id = this.marker.foursquare_id
            model.set("foursquare",foursquare)
            displayProfileView(model)
          }
        });
      }
    }
    )
      .done(function () {
//        console.log("second success");
      })
      .fail(function (e) {
        console.log("error");
      })
      .always(function () {
//        console.log("finished");
      });
  }

  function displayProfileView(model) {

    QuitoFrontend.ProfileView = new QuitoFrontend.Views.ProfileView({selectedProfile:"Jorge", model:model});
    QuitoFrontend.mainRegion.show(QuitoFrontend.ProfileView)
  }
  
  