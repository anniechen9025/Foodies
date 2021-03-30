window.onload = function () {

  const apiKey = "QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
  // Bypass for CORS
  // If error occurs, go to the website in console and request temporary access
  const corsUrl = "https://cors-anywhere.herokuapp.com/"
  const token = "Bearer QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
  const storeData = JSON.parse(localStorage.getItem("restaurantData")) || [];
  let map;
  
  function searchbtn() {
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
  
      let latData = map.center.lat();
  
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
        let imageArray = [];
  
        for (i = 0; i < 10; i++) {
          let yelpList = response.businesses[i]
          console.log(yelpList);
  
          let yelpNumber = yelpList.display_phone;
          console.log(yelpNumber)
  
          let yelpName = yelpList.name;
          // console.log(yelpName)
  
          let linkTag = $("<a>").text(yelpName);
          linkTag.attr("href", yelpList.url)
          console.log(yelpList.url)
  
          let listBtn = $("<li>").append(linkTag)
          $("#yelp-list").append(listBtn).addClass("list-text")
  
          let yelpImage = yelpList.image_url;
          imageArray.push(yelpImage);
          // console.log(yelpImage)
  
          // Variables that stores Yelps restaurant longitude and latitude
          let yelpLat = yelpList.coordinates.latitude;
          console.log(yelpLat)
  
          let yelpLng = yelpList.coordinates.longitude;
          console.log(yelpLng)
  
          const myLatLng = { lat: yelpLat, lng: yelpLng };
  
          var marker = new google.maps.Marker({
            position: myLatLng,
            title: `${yelpList.name}`
          });
  
          marker.addListener("click",function(){
            window.location.replace(yelpList.url);
          });
  
          // $("#yelp-2").attr("src", yelpImage)
  
          $("#boxes").removeClass("hide")
          $("#hide-text").empty("")
  
          // To add the marker to the map, call setMap();
          marker.setMap(map);
  
        }
        let randomNumber = Math.floor((Math.random()*8)+1);
        $("#yelp-2").attr("src", imageArray[randomNumber]);
      })
    });
  };
  
  
  function clearSearch() {
    $("#yelp-list").empty("")
  };
  
  //Geolocation API 
  navigator.geolocation.getCurrentPosition(successCallback,
    errorCallback,
    { maximumAge: 600000 });
  function successCallback(position) {
    console.log(position);
    updatedMap(position);
    $("#searchbox").removeClass("hide");
    searchbtn();
  }
  function errorCallback(error) {
    console.log(error);
  };
  
  //Google Map API
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
        zoom: 12,
      });
    }
  };
}

