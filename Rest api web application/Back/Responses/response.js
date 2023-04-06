exports.status=(values,res)=>{

    const data={
        "values":values
    }

    res.json(data)
    res.end()
}