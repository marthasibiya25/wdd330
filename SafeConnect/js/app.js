import { saveAlert } from "./alerts.js";

const btn = document.getElementById("alertBtn");
const locationBox = document.getElementById("locationBox");

let currentLat = null;
let currentLon = null;

// GET LOCATION
navigator.geolocation.getCurrentPosition(
    (position) => {

        currentLat = position.coords.latitude;
        currentLon = position.coords.longitude;

        locationBox.textContent =
            `📍 ${currentLat}, ${currentLon}`;
    },
    () => {
        locationBox.textContent = "Location blocked ❌";
    }
);

// SEND ALERT
btn.addEventListener("click", () => {

    if (currentLat === null || currentLon === null) {
        alert("Wait for location to load");
        return;
    }

    saveAlert(currentLat, currentLon);

    alert("🚨 Emergency Alert Sent!");
});