import { getMovieDetails, getMovieVideos, IMAGE_URL } from "./api.js";

const container = document.getElementById("detailsContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadDetails() {
    const movie = await getMovieDetails(id);
    const videos = await getMovieVideos(id);

    const trailer = videos.find(v => v.type === "Trailer");

    container.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="${IMAGE_URL + movie.poster_path}" />
    <p>${movie.overview}</p>

    ${trailer
            ? `<iframe width="100%" height="400"
            src="https://www.youtube.com/embed/${trailer.key}"
            allowfullscreen></iframe>`
            : "<p>No trailer available</p>"
        }
  `;
}

loadDetails();