const apiKey = "QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
// Bypass for CORS
// If error occurs, go to the website in console and request temporary access
const corsUrl = "https://cors-anywhere.herokuapp.com/"
const token = "Bearer QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
const storeData = JSON.parse(localStorage.getItem("restaurantData")) || [];
let map;

$(".searchBtn").on("click", function () {
  let userInput = $("#userInput").val().trim()
  // If there is an empty value, return

  storeData.push(userInput);
  if (userInput === "") {
    return;
  } else {
    localStorage.setItem("restaurantData", JSON.stringify(storeData))
  }

  let lngData = map.center.lng();
  // console.log(lngData)

  let latData = map.center.lat();
  // console.log(latData);

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
    clearSearch();

    for (i = 0; i < 12; i++) {
      let yelpList = response.businesses[i]
      // console.log(yelpList);

      let yelpNumber = yelpList.display_phone;
      // console.log(yelpNumber)

      let yelpName = yelpList.name;
      // console.log(yelpName)

      let listBtn = $("<li>").text(yelpName + " Phone #: " + yelpNumber);
      $("#yelp-list").append(listBtn).addClass("list-text")

      let yelpImage = yelpList.image_url;
      // console.log(yelpImage)

      $("#yelp-2").attr("src", yelpImage)
    
      $("#boxes").removeClass("hide")
      $("#hide-text").empty("")
    }
  })
});

function clearSearch() {
  $("#yelp-list").empty("")
}

navigator.geolocation.getCurrentPosition(successCallback,
  errorCallback,
  { maximumAge: 600000 });
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

function updatedMap(position) {
  if (position) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom: 14,
    });
  }
};

//MAP SCRIPT API (https://developers.google.com/maps/documentation/javascript/overview#Inline)
//LOCAL LIABARY MAP API (https://developers.google.com/maps/documentation/javascript/local-context/start)

