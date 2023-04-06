exports.status=(actor_info,films,res)=>{

    const data={
        "actor_info":actor_info,
        "films":films
    }

    res.json(data)
    res.end()
}