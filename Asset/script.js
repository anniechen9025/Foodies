navigator.geolocation.getCurrentPosition(successCallback,
    errorCallback,
    {maximumAge:600000});
function successCallback(position) {
console.log(position);
}
function errorCallback(error) {
console.log(error);
};

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};


//MAP SCRIPT API (https://developers.google.com/maps/documentation/javascript/overview#Inline)
//LOCAL LIABARY MAP API (https://developers.google.com/maps/documentation/javascript/local-context/start)
