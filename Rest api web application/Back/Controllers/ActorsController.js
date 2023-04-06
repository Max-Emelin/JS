const response=require('../Responses/response')
const response2=require('../Responses/responseActors')
const db=require('../db')

exports.actors=(req,res)=>{
    db.query('select * from actors',(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            response.status(rows,res);
        }
    })
}
exports.actor=(req,res)=>{
    try{
    const {id}=req.params
    if(!id){
        res.status(400).json({message:"no id"})
    }
    let actor
    let films
    const sql="select * from actors where id="+id
    db.query(sql,(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            actor=rows
        }
    })
    const sql2="select films.name " +
    "from films " +
    "left join film_actor on films.id=film_actor.id_film " +
    "where film_actor.id_actor="+id
    db.query(sql2,(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            films=rows
            response2.status(actor,films,res)
        }
    })
    }catch (e){
        res.status(500).json(e)
    }
}
exports.addActor=(req,res)=>{
    try {
    const sql="INSERT INTO actors(a_name,a_date_of_birth) VALUES('"+req.query.name+"','"
        +req.query.date+"')";
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
exports.deleteActor=(req,res)=>{
    try{
    const sql="DELETE FROM actors WHERE a_name="+"'"+req.query.name+"'";
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
exports.updateActor=(req,res)=>{
    try {
    const sql="UPDATE actors SET a_name="+"'"+req.query.name+"', " +
        "a_date_of_birth="+"'"+req.query.date+"'"+" WHERE a_name="+"'"+req.query.previousName+"'";
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