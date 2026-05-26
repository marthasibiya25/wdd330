import { getTrendingMovies, searchMovies, IMAGE_URL } from "./api.js";

const container = document.getElementById("moviesContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

async function loadMovies() {
    const movies = await getTrendingMovies();
    displayMovies(movies);
}

function displayMovies(movies) {
    container.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
      <img src="${IMAGE_URL + movie.poster_path}" />
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.vote_average}</p>
        <button onclick="location.href='details.html?id=${movie.id}'">
          View
        </button>
      </div>
    `;

        container.appendChild(card);
    });
}

searchBtn.addEventListener("click", async () => {
    const query = searchInput.value;
    if (!query) return;

    const results = await searchMovies(query);
    displayMovies(results);
});

loadMovies();