const alertBtn = document.getElementById("alertBtn");
const locationInfo = document.getElementById("locationInfo");

alertBtn.addEventListener("click", getLocation);

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition);

    } else {

        locationInfo.textContent =
            "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    locationInfo.textContent =
        `Latitude: ${latitude}, Longitude: ${longitude}`;

    alert("Emergency Alert Activated!");
}