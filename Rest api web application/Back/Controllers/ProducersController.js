const response=require('../Responses/response')
const response2=require('../Responses/responseProducers')
const db=require('../db')

exports.producers=(req,res)=>{
    db.query('select * from producers',(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            response.status(rows,res);
        }
    })
}
exports.producer=(req,res)=>{
    try {
    const {id}=req.params
    if(!id){
        res.status(400).json({message:"no id"})
    }
    let producer
    let films
    const sql="select * from producers where id="+id
    db.query(sql,(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            producer=rows
        }
    })
    const sql2="select films.name " +
        "from films " +
        "left join film_producer on films.id=film_producer.id_film " +
        "where film_producer.id_producer="+id
    db.query(sql2,(error,rows,fields)=>{
        if(error){
            console.log(error);
        }else{
            films=rows
            response2.status(producer,films,res)
        }
    })
    }catch (e){
        res.status(500).json(e)
    }
}
exports.addProducer=(req,res)=>{
    try {
    const sql="INSERT INTO producers(p_name,p_date_of_birth) VALUES('"+req.query.name+"','"
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
exports.deleteProducer=(req,res)=>{
    try {
    const sql="DELETE FROM producers WHERE p_name="+"'"+req.query.name+"'";
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
exports.updateProducer=(req,res)=>{
    try {
    const sql="UPDATE producers SET p_name="+"'"+req.query.name+"', " +
        "p_date_of_birth="+"'"+req.query.date+"'"+" WHERE p_name="+"'"+req.query.previousName+"'";
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