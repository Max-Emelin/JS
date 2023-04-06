exports.status=(genre,films,res)=>{

    const data={
        "genre":genre,
        "films":films
    }

    res.json(data)
    res.end()
}