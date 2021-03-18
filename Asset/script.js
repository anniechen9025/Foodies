const apiKey = "QUZUkG7TUxmpU7KluE2jyqZtI8PEZCZwXyyJWeZUrhk7LOhxoiDv1YaTYF9bNzVU808diTb1CPGXeZKVmar4QRlMMgKxNvg5l_NzkPq40EXG7VF4kNioPiPhZTZQYHYx"
// Bypass for CORS
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
})




// aJax();
// getApi();