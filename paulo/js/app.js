var map;
function initMap() {
    let centerMap = {lat: 37.402529, lng: -5.996072};
    let mapOptions = {
        center: centerMap,
        zoom: 15
    };
    var infowindow = new google.maps.InfoWindow({
        content: "<b>Kraken Clothes Shop</b><br>Tienda de ropa muy fashion donde encontraras ropa para niño, niña, hombre y mujer.<br><br>Calle sin nombre Nº 13 41008, Sevilla España<br>"
    });
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.402529, -5.996072),
        map: map,
        title: "Kraken Clothes Shop",
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });


}
