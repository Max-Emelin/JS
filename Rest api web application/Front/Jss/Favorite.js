fetch(
    'http://localhost:3500/films/favorite'
)
    .then(res=>res.json())
    .then(data=>setInfo(data));
function setInfo({values}){
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="topText">Max&Favorite</div>
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
                <th>Look</th>
                <th>Trash?</th>
            </tr>
            ${FilmsToTable(values)}
        </table>
        `
    )
}
function deleteFavorite(id){
    let url="http://localhost:3500/films/deleteFavorite"+"?id="+id.toString()
    fetch(url)
    document.location.reload()
}
function rowFilm(film){
    const url='../pic/Films/'
    let urlLook=new URL('http://localhost:63342/back1/Front/Htmls/Film.html')
    urlLook.searchParams.append('id', film.id);
    return`
        <td><img src=${url}${film.pic_url} width="80" height="120"</td>
        <td>${film.name}</td>
        <td>${film.rating}</td>
        <td><a href="${urlLook}" >Посмотреть</a></td>
        <td><button id="delete"class="button2"onclick="deleteFavorite(${film.id})">Trash</button></td>
    `
}
function FilmsToTable(films){
    return films.map(
        (film)=>`
        <tr>${rowFilm(film)}</tr>
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