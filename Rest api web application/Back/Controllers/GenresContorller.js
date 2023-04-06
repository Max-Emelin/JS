const response=require('../Responses/response')
const response2=require('../Responses/responseGenres')
const db=require('../db')

exports.genres=(req,res)=>{
    db.query('select * from genres',(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            response.status(rows,res);
        }
    })
}
exports.genre=(req,res)=>{
    try {
    const {id}=req.params
    if(!id){
        res.status(400).json({message:"no id"})
    }
    let genre
    let films
    const sql="select * from genres where id="+id
    db.query(sql,(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            genre=rows
        }
    })
    const sql2="select films.name " +
        "from films " +
        "left join film_genre on films.id=film_genre.id_film " +
        "where film_genre.id_genre="+id
    db.query(sql2,(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            films=rows
            response2.status(genre,films,res)
        }
    })
    }catch (e){
        res.status(500).json(e)
    }
}
exports.addGenre=(req,res)=>{
    try{

    const sql="INSERT INTO genres(g_name) VALUES('"+req.query.name+"')";
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
exports.deleteGenre=(req,res)=>{
    try{
    const sql="DELETE FROM genres WHERE g_name="+"'"+req.query.name+"'";
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
exports.updateGenre=(req,res)=>{
    try {
    const sql="UPDATE genres SET g_name="+"'"+req.query.name+"'" +" WHERE g_name="+"'"+req.query.previousName+"'";
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