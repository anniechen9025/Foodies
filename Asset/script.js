const apiKey = "QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
// Bypass for CORS
// If error occurs, go to the website in console and request temporary access
const corsUrl = "https://cors-anywhere.herokuapp.com/"
const token = "Bearer QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"

$("#firstBtn").on("click", function () {
    let query = $("#userInput").val()
    // If there is an empty value, return
    if (query === "") {
        return;
    }
    // query is taking the users input 
    let yelpApi = `https://api.yelp.com/v3/businesses/search?term=${query}&location=98133`;
    console.log(yelpApi)

    $.ajax({
        url: corsUrl + yelpApi,
        method: "GET",
        headers: {
            Authorization: token,
            "Content-type": "application/json"
        }
    }).then(function (response) {
        console.log(response);
    })
});

navigator.geolocation.getCurrentPosition(successCallback,
    errorCallback,
    {maximumAge:600000});
function successCallback(position) {
console.log(position);
updatedMap(position);
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

function updatedMap(position){
  if(position)
  {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 8,
    });
  }
};


//MAP SCRIPT API (https://developers.google.com/maps/documentation/javascript/overview#Inline)
//LOCAL LIABARY MAP API (https://developers.google.com/maps/documentation/javascript/local-context/start)

