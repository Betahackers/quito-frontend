
  function initializeMap() {
    var mapOptions = {
      center: new google.maps.LatLng(41.39479, 2.1487679),
      zoom: 14
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }

