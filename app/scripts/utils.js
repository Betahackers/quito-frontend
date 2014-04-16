
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

    $(function () {
        // Get this now, when the menus are collapsed.
        QuitoFrontend.profilesButtonTop = $(".profiles-box").offset().top;
    });

    $(".sidebar-box a").click(function () {
        var collapsibleChild = $(this).parent().find(".collapse");
                
        if ($(this).parent().hasClass("profiles-box")) {
            if (!$(".profiles-container").hasClass("in")) {
                var windowHeight = $(window).height();
                var boxTop = QuitoFrontend.profilesButtonTop;
                var boxHeight = $(".profiles-box").outerHeight();
                var newHeight = windowHeight - (boxTop + boxHeight);
                $(".profiles-expanded").css("height", newHeight + "px");
            }
        }

        collapsibleChild.collapse("toggle");
        $(".collapse.in").not(collapsibleChild).collapse("hide");
    });

  function fetchMarker(markerType, type) {
    
    $('#ProfileArticlePanel').hide()
    if (type === 'by_mood') {
      //background-color: #49c4c1;
      $('.profile').css("background-color","#49c4c1");
    } else if (type === 'by_category') {
      //background-color: rgba(154,147,210,1);
      $('.profile').css("background-color","rgba(154,147,210,1)");
    } else  if (type === 'by_user') {
      //background-color: rgba(147,204,58,1);
      $('.profile').css("background-color","rgba(147,204,58,1)");
    } else  {
        //background-color: #6d97cb;
      $('.profile').css("background-color","#6d97cb");
    }

    var url = "http://" + Config.DevProxy + "www.fromto.es/v2/locations.json?"+type+"=" + markerType;
    var jqxhr = $.get(url, function (data) {
//      console.log("success");
      //QuitoFrontend.markers = data
      //var markers = new QuitoFrontend.Collections.MarkerCollection(QuitoFrontend.markers)
      QuitoFrontend.markers = data.locations;

        if (type === 'by_user') {
          var model = new QuitoFrontend.Models.Profile();
          if ((typeof QuitoFrontend.markers[0].location.articles !== 'undefined') && (QuitoFrontend.markers[0].location.articles.length > 0)) {
            var user = null;
            if (typeof QuitoFrontend.markers[0].location.articles[0].article !== 'undefined') {
              user = QuitoFrontend.markers[0].location.articles[0].article.user;
            } else {
              // try the next one.
              if (typeof QuitoFrontend.markers[0].location.articles[1].article !== 'undefined') {
                user = QuitoFrontend.markers[0].location.articles[1].article.user;
              }
              console.log("Warning: the first article in this profile is empty. id: " + user.id + " name: " + user.first_name)
            }
            var userThumbnailUrl = "http://www.fromto.es/images/fallback/thumb_avatar.png";
            if ((user != null) && (user.avatar_url_suffix !== "avatar.png")) {
              userThumbnailUrl = user.avatar_url_prefix + user.avatar_url_suffix;
            }
            model.set("user",user)
            model.set("userThumbnailUrl",userThumbnailUrl)
            var foursquare = {}
            foursquare.photoUrl = userThumbnailUrl;
            $('.profile-picture').css("width","240px");
            model.set("foursquare",foursquare)
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
//              console.log("success");
              model.set("user",data.article.user)
              // 			<img class="profile-image" src="http://www.fromto.es{{user.avatar_url_prefix}}{{user.avatar_url_suffix}}" />
              var userThumbnailUrl = "http://www.fromto.es/images/fallback/thumb_avatar.png";
              if (data.article.user.avatar_url_suffix !== "avatar.png") {
                userThumbnailUrl = data.article.user.avatar_url_prefix + data.article.user.avatar_url_suffix;
              }
              model.set("userThumbnailUrl",userThumbnailUrl)
              model.set("firstName",data.article.user.first_name)
              model.set("lastName",data.article.user.last_name)
              model.set("article",data.article)
              model.set("moods",data.article.moods)
              //220x120
//            width220
              if (typeof data.article.locations !== 'undefined') {
                foursquare.name = data.article.locations[0].location.foursquare.name;
                foursquare.canonicalUrl = data.article.locations[0].location.foursquare.canonicalUrl;
                if (data.article.locations[0].location.foursquare.photos.groups.length > 0) {
                  var photosTree = data.article.locations[0].location.foursquare.photos.groups[0].items[0]
                  var photoUrlOrig = photosTree.prefix + "width220" + photosTree.suffix
                  var photoUrlArr = photoUrlOrig.split("://");
                  var photoUrl = ""
                  if (Config.DevProxy.length > 0) {
                    photoUrl = "http://" + Config.DevProxy + photoUrlArr[1]
                  } else {
                    photoUrl = photoUrlOrig
                  }
                  foursquare.photoUrl = photoUrl;
                } else {
                  console.log("No image for " + data.article.locations[0].location.foursquare.canonicalUrl)
                }
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
  
  