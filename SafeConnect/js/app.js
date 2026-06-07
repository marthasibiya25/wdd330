import { saveAlert } from "./alerts.js";

const btn = document.getElementById("alertBtn");
const locationBox = document.getElementById("locationBox");

let currentLat = null;
let currentLon = null;

// GET LOCATION ON LOAD
navigator.geolocation.getCurrentPosition(
    (position) => {
        currentLat = position.coords.latitude;
        currentLon = position.coords.longitude;

        locationBox.textContent =
            `📍 Lat: ${currentLat}, Lon: ${currentLon}`;
    },
    (error) => {
        locationBox.textContent = "❌ Location permission denied";
    }
);

// ALERT BUTTON
btn.addEventListener("click", () => {

    if (!currentLat || !currentLon) {
        alert("Location not ready yet!");
        return;
    }

    saveAlert(currentLat, currentLon);

    alert("🚨 Emergency Alert Sent!");
});