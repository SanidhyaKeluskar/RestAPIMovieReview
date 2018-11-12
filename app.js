const express= require('express')
const app=express()
const mysql=require('mysql')

app.get("/",(req,res)=>{
    res.send("Hello from root")
})

app.get("/:moviename",(req,res)=>{
    console.log("ncdnnf "+ req.params.moviename)

    const connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Sanidhya@101',
        database: 'moviedb' 
    })
    const queryString="select * from review_table  where movie_name=?"
    connection.query(queryString,[req.params.moviename],(err,rows,fields)=>{
        console.log("fetched users sucessfully")
        res.json(rows)
    })
    
}) 

app.get("/users",(req,res)=>{
var user1={firstname: "John", lastName: "Smith"}
const user2={firstname: "Sam", lastName: "Smith"}
const user3={firstname: "Sam", lastName: "Smith"}

res.json([user1,user2,user3])

   // res.send("hi from users")
})
app.listen(3002,()=>{
    console.log("server is listening")
})