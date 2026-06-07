const map = L.map('map').setView([-26.2041, 28.0473], 12);

// Load map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load alerts from storage
let alerts = JSON.parse(localStorage.getItem("alerts")) || [];

// Add markers
alerts.forEach(alert => {

    L.marker([alert.latitude, alert.longitude])
        .addTo(map)
        .bindPopup(`
            🚨 Emergency Alert<br>
            ⏰ ${alert.time}
        `);
});