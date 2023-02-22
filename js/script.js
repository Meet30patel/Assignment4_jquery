
$(function () {
    /*
    Assignment #4
    Meet Patel
    studnet no : 0810103
*/

$(function () {

    if ("geolocation" in navigator) {

      
        navigator.geolocation.getCurrentPosition(function(position) {

           
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var localDiv = $("#locationhere");
            localDiv.text("Your current location is: " + lat.toFixed(6) + "°N, " + lon.toFixed(6) + "°E");

           
            if (localStorage.getItem("location") !== null) {

                var savedLocation = localStorage.getItem("location");
                var savedLocationTag = $("<p>").text("Your last location was: " + savedLocation);
                var contentSection = $("#content");
                contentSection.append(savedLocationTag);

                var welcomeMessage = $("<h2>").text("Welcome back!");
                contentSection.prepend(welcomeMessage);

                
                var distance = calcDistanceBetweenPoints(lat, lon, savedLocation.split(",")[0], savedLocation.split(",")[1]);

                
                var disKm = (distance / 1000).toFixed(2);
                var distanceMessage = $("<p>").text("You have traveled " + disKm + " km since your last visit.");
                contentSection.append(distanceMessage);
            } else {

                var welcomeMessage = $("<h2>").text("Welcome!");
                var contentSection = $("#content");
                contentSection.prepend(welcomeMessage);
            }
            localStorage.setItem("location", lat + "," + lon);
        }, function(error) {

            if (error.code === error.PERMISSION_DENIED) {
                
                var localDiv = $("#locationhere");
                localDiv.text("You must allow geolocation to use this application.");
            }
        });

    } else {

        var localDiv = $("#locationhere");
        localDiv.text("Geolocation is not supported by your browser.");
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


