export function login(username) {
    localStorage.setItem("user", username);
}

export function isLoggedIn() {
    return localStorage.getItem("user") !== null;
}