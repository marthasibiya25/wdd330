import { getLocation } from "./location.js";
import { saveAlert } from "./alerts.js";
import { isLoggedIn } from "./auth.js";

if (!isLoggedIn()) {
    window.location.href = "login.html";
}

const btn = document.getElementById("alertBtn");
const locationBox = document.getElementById("locationBox");

let latestLat = 0;
let latestLon = 0;

getLocation((lat, lon) => {
    latestLat = lat;
    latestLon = lon;

    locationBox.textContent = `Lat: ${lat}, Lon: ${lon}`;
});

btn.addEventListener("click", () => {
    saveAlert(latestLat, latestLon);
    alert("Emergency Alert Sent!");
});

window.logout = function () {
    localStorage.removeItem("user");
    window.location.href = "login.html";
};