const alertList = document.getElementById("alertList");
const clearBtn = document.getElementById("clearAlertsBtn");

// Load existing alerts or start empty
let alerts = JSON.parse(localStorage.getItem("alerts")) || [];

displayAlerts();

// This function will be used later by your emergency button too
function saveAlert(latitude, longitude) {

    const newAlert = {
        id: Date.now(),
        latitude,
        longitude,
        time: new Date().toLocaleString()
    };

    alerts.push(newAlert);

    localStorage.setItem("alerts", JSON.stringify(alerts));

    displayAlerts();
}

function displayAlerts() {

    alertList.innerHTML = "";

    alerts.forEach(alert => {

        const li = document.createElement("li");

        li.innerHTML = `
            🚨 Alert #${alert.id}<br>
            📍 Lat: ${alert.latitude}, Long: ${alert.longitude}<br>
            ⏰ Time: ${alert.time}
        `;

        alertList.appendChild(li);
    });
}

// Clear all alerts
clearBtn.addEventListener("click", function () {

    alerts = [];

    localStorage.removeItem("alerts");

    displayAlerts();
});