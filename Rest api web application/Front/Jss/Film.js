let url = window.location;
let params = new URLSearchParams(url.search);
let id = params.get('id');
fetch(
    "http://localhost:3500/films/id/"+id.toString()
)
    .then(res=>res.json())
    .then(data=>setInfo(data));

function pr({film_info}){
    console.log(film_info)
    document.body.insertAdjacentHTML(
        'afterbegin',
        `${film_info}
        `
    )
}
function pr2(o){
    return``
}

function setInfo({actors,film_info,genres,producers}){
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="topText">Max&Film</div>
        <div class="buttons">
            <button id="films"class="button"  onclick="goToFilms()">Films</button>
            <button id="genres"class="button" onclick="goToGenres()">Genres</button>
            <button id="actors"class="button" onclick="goToActors()">Actors</button>
            <button id="producers"class="button" onclick="goToProducers()">Producers</button>
            <button id="favorite"class="button"onclick="goToFavorite()">Favorite</button>
        </div>
        <table id="table">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Rating</th>
                <th>Year</th>
                <th>Budget</th>
            </tr>
            ${filmToTable(film_info)}
        </table>
        <div class="Header">Actors</div>
            ${ActorsToOut(actors)}
        <div class="Header">Genres</div>
            ${genresToOut(genres)}
        <div class="Header">Producers</div>
            ${producersToOut(producers)}
            
        `
    )
}
function filmToRow(film){
    const url='../pic/Films/'
    return`
        <td><img src=${url}${film.pic_url} width="240" height="360"</td>
        <td>${film.name}</td>
        <td>${film.rating}</td>
        <td>${film.year}</td>
        <td>${film.budget}</td>
    `
}
function filmToTable(films){
    return films.map(
        (film)=>`
        <tr>${filmToRow(film)}</tr>
        `
    ).join(' ')
}
function rowActor(actor){
    return`
        <p>${actor.a_name}</p>
    `
}
function ActorsToOut(actors){
    return actors.map(
        (actor)=>`
        ${rowActor(actor)}
        `
    ).join(' ')
}

function rowGenre(genre){
    return`
        <p>${genre.g_name}</p>
    `
}
function genresToOut(genres){
    return genres.map(
        (genre)=>`
        ${rowGenre(genre)}
        `
    ).join(' ')
}

function rowProducer(producer){
    return`
        <p>${producer.p_name}</p>
    `
}
function producersToOut(producers){
    return producers.map(
        (producer)=>`
        ${rowProducer(producer)}
        `
    ).join(' ')
}

function goToActors(){
    let url=new URL('http://localhost:63342/back1/Front/Htmls/Actors.html');
    window.location.href=url.href;
}
function goToFilms(){
    let url=new URL('http://localhost:63342/back1/Front/Htmls/Films.html');
    window.location.href=url.href;
}
function goToGenres(){
    let url=new URL('http://localhost:63342/back1/Front/Htmls/Genres.html');
    window.location.href=url.href;
}
function goToProducers(){
    let url=new URL('http://localhost:63342/back1/Front/Htmls/Producers.html');
    window.location.href=url.href;
}
function goToFavorite(){
    let url=new URL('http://localhost:63342/back1/Front/Htmls/Favorite.html');
    window.location.href=url.href;
}