export function saveAlert(lat, lon) {

    let alerts = JSON.parse(localStorage.getItem("alerts")) || [];

    const newAlert = {
        id: Date.now(),
        latitude: lat,
        longitude: lon,
        time: new Date().toLocaleString()
    };

    alerts.push(newAlert);

    localStorage.setItem("alerts", JSON.stringify(alerts));
}