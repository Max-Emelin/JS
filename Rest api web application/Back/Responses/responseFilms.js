exports.status=(film_info,genres,actors,producers,res)=>{

    const data={
        "film_info":film_info,
        "genres":genres,
        "actors":actors,
        "producers":producers
    }

    res.json(data)
    res.end()
}