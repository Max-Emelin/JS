fetch(
    'http://localhost:3500/producers'
)
    .then(res=>res.json())
    .then(data=>setInfo(data));

function setInfo({values}){
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="topText">Max&Producers</div>
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
                <th>Look</th>
            </tr>
            ${ProducersToTable(values)}
        </table>
        `
    )
}
function rowProducer(producer){
    const url='../pic/Producers/'
    return`
        <td><img src=${url}${producer.p_pic_url} width="80" height="120"</td>
        <td>${producer.p_name}</td>
        <td><a href="" onclick="return false">Посмотреть</a></td>
    `
}
function ProducersToTable(producers){
    return producers.map(
        (producer)=>`
        <tr>${rowProducer(producer)}</tr>
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