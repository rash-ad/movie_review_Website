console.log("Hello World");
let movieTitle = document.getElementById("movieTitle").value;
let apikey = "aef35bd9";
let headingCard=document.getElementById('heading-card').value;
 
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
        
    `;
    headingCard.innerText= data.Title;
}