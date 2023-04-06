const  mysql=require('mysql2')

const  connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'course_work',
   // database:'lab4'//course_work
})
connection.connect((error)=>{
    if(error){
        return console.log('no connect to bd'+error)
    }else {
        return console.log('success  connect to bd')
    }
})
module.exports=connection