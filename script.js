async function loadPage() {
    let response = await fetch(
        'http://www.omdbapi.com/?apikey=55576887&s=Avengers'
    );
    const movies = await response.json();
    console.log(movies);
    $('#result').empty();
    for (const movie of movies.Search) {
        $('#result').append(`
        <div class="col mb-4">
            <div class="card h-100" type="button" onclick="details('${movie.imdbID}')">
                <img src="${movie.Poster}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <p class="card-text">${movie.imdbID}</p>
                </div>
            </div>
        </div>
        `);
    }
}
function searchMovie() {
    $('#movieForm').submit(async function (event) {
        event.preventDefault();
        var name = $('#movie').val();
        console.log(name);
        let response = await fetch(
            `http://www.omdbapi.com/?apikey=55576887&s=${name}`
        );
        const movies = await response.json();
        console.log(movies);
        $('#result').empty();
        for (const movie of movies.Search) {
            $('#result').append(`
            <div class="col mb-4">
                <div class="card h-100" type="button">
                    <img src="${movie.Poster}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Year}</p>
                        <p class="card-text">${movie.imdbID}</p>
                    </div>
                </div>
            </div>
        `);
        }
        $('#p1').click(async () => {
            let response = await fetch(
                `http://www.omdbapi.com/?apikey=55576887&s=${name}&page=`
            );
            const movies = await response.json();
            console.log(movies);
            $('#result').empty();
            for (const movie of movies.Search) {
                $('#result').append(`
                <div class="col mb-4">
                    <div class="card h-100" type="button" onclick="details('${movie.imdbID}')">
                        <img src="${movie.Poster}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <p class="card-text">${movie.Year}</p>
                            <p class="card-text">${movie.imdbID}</p>
                        </div>
                    </div>
                </div>
                `);
            }
        });
        $('#p2').click(async () => {
            let response = await fetch(
                `http://www.omdbapi.com/?apikey=55576887&s=${name}&page=2`
            );
            const movies = await response.json();
            console.log(movies);
            $('#result').empty();
            for (const movie of movies.Search) {
                $('#result').append(`
                <div class="col mb-4">
                    <div class="card h-100" type="button" onclick="details('${movie.imdbID}')">
                        <img src="${movie.Poster}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <p class="card-text">${movie.Year}</p>
                            <p class="card-text">${movie.imdbID}</p>
                        </div>
                    </div>
                </div>
                `);
            }
        });
        $('#p3').click(async () => {
            let response = await fetch(
                `http://www.omdbapi.com/?apikey=55576887&s=${movie.Title}&page=3`
            );
            const movies = await response.json();
            console.log(movies);
            $('#result').empty();
            for (const movie of movies.Search) {
                $('#result').append(`
                <div class="col mb-4">
                    <div class="card h-100" type="button" onclick="details('${movie.imdbID}')">
                        <img src="${movie.Poster}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <p class="card-text">${movie.Year}</p>
                            <p class="card-text">${movie.imdbID}</p>
                        </div>
                    </div>
                </div>
                `);
            }
        });
    });
}
function details(movieId) {
    setTimeout(async () => {
        let response = await fetch(
            `http://www.omdbapi.com/?apikey=55576887&i=${movieId}`
        );
        const movie = await response.json();
        console.log(movie);
        $('#result').empty();
        $('#pagination').empty();
        $('#result').append(`
                <div class="col mb-4">
                    <div class="card h-100">
                        <img src="${movie.Poster}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <p class="card-text">${movie.Year}</p>
                            <p class="card-text">${movie.Genre}</p>
                            <p class="card-text">${movie.Rated}</p>
                            <p class="card-text">${movie.Director}</p>
                            <p class="card-text">${movie.Actors}</p>
                            <p class="card-text">${movie.Plot}</p>
                        </div>
                    </div>
                </div>
            `);
    }, 1500);
}
$('#p2').click(async () => {
    let response = await fetch(
        'http://www.omdbapi.com/?apikey=55576887&s=Avengers&page=2'
    );
    const movies = await response.json();
    console.log(movies);
    $('#result').empty();
    for (const movie of movies.Search) {
        $('#result').append(`
        <div class="col mb-4">
            <div class="card h-100" type="button" onclick="details('${movie.imdbID}')">
                <img src="${movie.Poster}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <p class="card-text">${movie.imdbID}</p>
                </div>
            </div>
        </div>
        `);
    }
});
$('#p3').click(async () => {
    let response = await fetch(
        'http://www.omdbapi.com/?apikey=55576887&s=Avengers&page=3'
    );
    const movies = await response.json();
    console.log(movies);
    $('#result').empty();
    for (const movie of movies.Search) {
        $('#result').append(`
        <div class="col mb-4">
            <div class="card h-100" type="button" onclick="details('${movie.imdbID}')">
                <img src="${movie.Poster}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <p class="card-text">${movie.imdbID}</p>
                </div>
            </div>
        </div>
        `);
    }
});

$().ready(() => {
    setTimeout(() => {
        searchMovie();
    }, 3000);
    loadPage();
});
