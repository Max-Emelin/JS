const response=require('../Responses/response')
const response2=require('../Responses/responseFilms')
const db=require('../db')

exports.films=(req,res)=>{
    db.query('select * from films',(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            response.status(rows,res);
        }
    })
}
exports.film=(req,res)=>{
    try {
        const {id} = req.params
        if (!id) {
            res.status(400).json({message: "no id"})
        }
        const sql = "select * from films where id=" + id
        let films
        let actors
        let genres
        let producers
        db.query(sql, (error, rows, fields) => {
            if (error) {
                console.log(error);
            } else {
                films = rows
            }
        })
        const sql2 = "select actors.a_name " +
            "from actors " +
            "left join film_actor on actors.id=film_actor.id_actor " +
            "where film_actor.id_film=" + id
        db.query(sql2, (error, rows, fields) => {
            if (error) {
                console.log(error);
            } else {
                actors = rows
            }
        })
        const sql3 = "select genres.g_name " +
            "from genres " +
            "left join film_genre on genres.id=film_genre.id_genre " +
            "where film_genre.id_film=" + id
        db.query(sql3, (error, rows, fields) => {
            if (error) {
                console.log(error);
            } else {
                genres = rows
            }
        })

        const sql4 = "select producers.p_name " +
            "from producers " +
            "left join film_producer on producers.id=film_producer.id_producer " +
            "where film_producer.id_film=" + id
        db.query(sql4, (error, rows, fields) => {
            if (error) {
                console.log(error);
            } else {
                producers = rows
                response2.status(films, genres, actors, producers, res)
            }
        })
    }catch (e){
        res.status(500).json(e)
    }
}
exports.addFilm=(req,res)=>{
    try {


    const sql="INSERT INTO films(name,year,rating,budget) VALUES('"+req.query.name+"','"
        +req.query.year+"','"+req.query.rating+"','"+req.query.budget+"')";
    db.query(sql,(error,results)=>
    {
        if(error){
            console.log(error);
        }else{
            response.status(results,res)
        }
    })
    }catch (e){
        res.status(500).json(e)
    }
}
exports.deleteFilm=(req,res)=>{
    try {
    const sql="DELETE FROM films WHERE name="+"'"+req.query.name+"'";
    db.query(sql,(error,results)=>
    {
        if(error){
            console.log(error);
        }else{
            response.status(results,res)
        }
    })
    }catch (e){
        res.status(500).json(e)
    }
}
exports.updateFilm=(req,res)=>{
    try {
    const sql="UPDATE films SET name="+"'"+req.query.name+"', " +
        "year="+"'"+req.query.year+"', " +
        "rating="+"'"+req.query.rating+"', " +
        "budget="+"'"+req.query.budget+"' WHERE name="+"'"+req.query.previousName+"'";
    db.query(sql,(error,results)=>
    {
        if(error){
            console.log(error);
        }else{
            response.status(results,res)
        }
    })
    }catch (e){
        res.status(500).json(e)
    }
}
exports.favorite=(req,res)=>{
    const sql="select * from films where favorite=1"
    db.query(sql,(error,rows,fields)=>{
        if(error){
            console.log(error);
            console.log(sql)
        }else{
            response.status(rows,res);
        }
    })
}

exports.setFavorite=(req,res)=>{

    const sql="update films set favorite=1 where id="+req.query.id
    db.query(sql,(error,results)=>
    {
        if(error){
            console.log(error);
        }else{
            response.status(results,res)
        }
    })
}
exports.deleteFavorite=(req,res)=>{
    const sql="update films set favorite=0 where id="+req.query.id
    db.query(sql,(error,results)=>
    {
        if(error){
            console.log(error);
        }else{
            response.status(results,res)
        }
    })
}