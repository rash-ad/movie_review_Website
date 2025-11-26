console.log("Hello World");
let movieTitle = document.getElementById("movieTitle").value;
let apikey = "aef35bd9";

 
movieTitle.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        getMovieData();
    }
});

async function getMovieData() {
    //let movieTitle = document.getElementById("movieTitle").value;
    let response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apikey}`);
    let data = await response.json();
    console.log(data);
    displayMovieData(data);
}
function displayMovieData(data) {
    document.getElementById("movieDetails").innerText = `
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <img src="${data.Poster}" alt="Movie Poster"/>
    `;
}