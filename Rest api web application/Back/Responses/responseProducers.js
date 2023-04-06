exports.status=(producer,films,res)=>{

    const data={
        "producer":producer,
        "films":films
    }

    res.json(data)
    res.end()
}