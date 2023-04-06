const filmsController = require("./Controllers/FilmsController");
const {producers} = require("./Controllers/ProducersController");
const cors = require("cors");
module.exports=(app)=>{
    const filmsController=require('./Controllers/FilmsController')
    const actorsController=require('./Controllers/ActorsController')
    const genresController=require('./Controllers/GenresContorller')
    const producersController=require('./Controllers/ProducersController')
    const cors=require('cors')


    app.get('/films',cors(),filmsController.films)
    app.get('/films/favorite',cors(),filmsController.favorite)
    app.get('/films/setFavorite',cors(),filmsController.setFavorite)
    app.get('/films/deleteFavorite',cors(),filmsController.deleteFavorite)
   // app.post('/films/add',cors(),filmsController.addFilm)
   // app.post('/films/delete',cors(),filmsController.deleteFilm)
   // app.post('/films/update',cors(),filmsController.updateFilm)
    app.get('/films/id/:id',cors(),filmsController.film)



    app.get('/actors',cors(),actorsController.actors)
   // app.get('/actors/:id',cors(),actorsController.actor)
   // app.post('/actors/add',cors(),actorsController.addActor)
   // app.post('/actors/delete',cors(),actorsController.deleteActor)
   // app.post('/actors/update',cors(),actorsController.updateActor)


    app.get('/genres',cors(),genresController.genres)
   // app.get('/genres/:id',cors(),genresController.genre)
   // app.post('/genres/add',cors(),genresController.addGenre)
   // app.post('/genres/delete',cors(),genresController.deleteGenre)
   // app.post('/genres/update',cors(),genresController.updateGenre)


    app.get('/producers',cors(),producersController.producers)
   // app.get('/producers/:id',cors(),producersController.producer)
   // app.post('/producers/add',cors(),producersController.addProducer)
   // app.post('/producers/delete',cors(),producersController.deleteProducer)
   // app.post('/producers/update',cors(),producersController.updateProducer)
}