export function saveAlert(lat, lon) {

    let alerts = JSON.parse(localStorage.getItem("alerts")) || [];

    alerts.push({
        id: Date.now(),
        latitude: lat,
        longitude: lon,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("alerts", JSON.stringify(alerts));
}