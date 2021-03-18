// var key = "AIzaSyAeWrxgOM61l2hJVTiqUpKdmf2pw_E_qa4";
// var corsUrl = "https://cors-anywhere.herokuapp.com/";
// var requestUrl = corsUrl + "https://www.googleapis.com/geolocation/v1/geolocate?key=" + key;
// var body = {
//     "homeMobileCountryCode": 310,
//     "homeMobileNetworkCode": 410,
//     "radioType": "gsm",
//     "carrier": "Vodafone",
//     "considerIp": "true",
//     "cellTowers": [
//         {
//             "cellId": 170402199,
//             "locationAreaCode": 35632,
//             "mobileCountryCode": 310,
//             "mobileNetworkCode": 410,
//             "age": 0,
//             "signalStrength": -60,
//             "timingAdvance": 15
//         }
//     ],
//     "wifiAccessPoints": [
//         {
//             "macAddress": "84:d4:7e:09:a5:f1",
//             "signalStrength": -43,
//             "age": 0,
//             "channel": 11,
//             "signalToNoiseRatio": 0
//         }
//     ],

// };

// function test() {
//     fetch(requestUrl, {
//         method: "POST",
//         body: JSON.stringify(body)
//     }).then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//     });
// };

// test();

// navigator.geolocation.getCurrentPosition(successCallback,
//     errorCallback,
//     {maximumAge:600000});
// function successCallback(position) {
// // By using the 'maximumAge' option above, the position
// // object is guaranteed to be at most 10 minutes old.
// console.log(position);
// }
// function errorCallback(error) {
// // Update a div element with error.message.
// console.log(error);
// };

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};


//MAP SCRIPT API (https://developers.google.com/maps/documentation/javascript/overview#Inline)
//LOCAL LIABARY MAP API (https://developers.google.com/maps/documentation/javascript/local-context/start)
