export function getLocation(callback) {

    navigator.geolocation.getCurrentPosition((pos) => {

        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        callback(lat, lon);
    });

}