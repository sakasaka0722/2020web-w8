
  function initMap() {
    var myOptions = {
      // -20.154250236996873, -67.58016247856337
      zoom: 7,
      center: {lat: -20.154250236996873, lng: -67.58016247856337},
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true,
      // Step 4. Customize displayed controls
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true
    }

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    // Step 2. Add custom icon
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
      position: {lat: -20.154250236996873, lng: -67.58016247856337},
      icon: iconBase + 'flag_maps.png',
      map: map
    });

    // Step 3. Add info window
    var contentString = '<div id="content"><h2 id="firstHeading" class="firstHeading">ウユニ塩湖</h2><h3>説明：</h3><p>塩湖の高低差が非常に小さいので、降った雨が流れることなく大地に薄く膜を貼る事で空を湖面に映し出す「天空の鏡」と呼ばれている。</p><h3>理由：</h3>ウユニ塩湖の写真を見た時にとても絶景で人生で一度は行ってみたいと思ったから。</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
