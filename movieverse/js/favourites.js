import { IMAGE_URL } from "./api.js";

const container = document.getElementById("favoritesContainer");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function displayFavorites() {
    container.innerHTML = "";

    favorites.forEach(movie => {
        const div = document.createElement("div");

        div.innerHTML = `
      <h3>${movie.title}</h3>
      <img src="${IMAGE_URL + movie.poster_path}" width="150">
      <button onclick="removeMovie(${movie.id})">Remove</button>
    `;

        container.appendChild(div);
    });
}

window.removeMovie = function (id) {
    favorites = favorites.filter(m => m.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
};

displayFavorites();