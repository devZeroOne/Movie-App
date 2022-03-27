
// data fetch from API
const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b64cbb54faafb95c79f4cdcfdbd74014&sort_by=popularity.desc&page=5"
const imgUrl = "https://image.tmdb.org/t/p/w500"
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=b64cbb54faafb95c79f4cdcfdbd74014&query="

getMovies(apiUrl)

function getMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => renderFunction(data.results))
}

// selectors
const main = document.querySelector('.main');
const form = document.querySelector('form');
const inputValue = document.querySelector('#search');


function renderFunction(movies) {

    main.innerHTML = ''

    movies.forEach(movie => {

        console.log(movie)
        const movieTitle = movie.title
        const movieRating = movie.vote_average
        const moviePoster = movie.poster_path
        const movieOverview = movie.overview


        console.log()

        const movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')
        movieDiv.innerHTML = `
            <img src="${moviePoster ? imgUrl + moviePoster : "./noImg.jpg"}" alt="">
            <div class="movie_info">
                <h3>${movieTitle}</h3>
                <span class="${getRatingPointClass(movieRating)}">${movieRating}</span>
            </div>
            <div class="overview">
                 <h3>Overview</h3>
                 <p>${movieOverview}</p>
            </div>
`
        main.appendChild(movieDiv)

    })
}

// movie rating color function
function getRatingPointClass(rating) {

    if (rating >= 8) {
        return "green"
    } else if (rating >= 5) {
        return "orange"
    } else {
        return "red"
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputData = inputValue.value.trim()
    if (inputData && inputData !== '') {
        getMovies(searchUrl + inputData)
        inputData = ""
    } else {
        window.location.reload()

    }
})







// homework
// 1 = after searching- -if you didn't get any data then show not found. 
// 2. add pagination  

// practive nw api 


// https://www.themealdb.com/


