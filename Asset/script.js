const apiKey = "QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
// Bypass for CORS
// If error occurs, go to the website in console and request temporary access
const corsUrl = "https://cors-anywhere.herokuapp.com/"
const token = "Bearer QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
let map;

$(".searchBtn").on("click", function () {
    let userInput = $("#userInput").val()
    // If there is an empty value, return
    if (userInput === "") {
        return;
    }
    
    let lngData = map.center.lng();
    console.log(lngData)
    
    let latData = map.center.lat();
    console.log(latData);

    // userInput is taking the users input and using it as a parameter
    let yelpApi = `https://api.yelp.com/v3/businesses/search?term=${userInput}&latitude=${latData}&longitude=${lngData}`;
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
        for (i = 0; i < response.businesses.length; i++) {
          let yelpList = response.businesses[i]
          console.log(yelpList);
        }
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
      zoom: 14,
    });
  }
};



//MAP SCRIPT API (https://developers.google.com/maps/documentation/javascript/overview#Inline)
//LOCAL LIABARY MAP API (https://developers.google.com/maps/documentation/javascript/local-context/start)

