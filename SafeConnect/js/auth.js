const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {

        localStorage.setItem("user", username);

        loginMsg.textContent = "Login successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {
        loginMsg.textContent = "Please enter details";
    }
});