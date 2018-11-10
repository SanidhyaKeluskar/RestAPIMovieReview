const express= require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("Hello from root")
})

app.get("/users",(req,res)=>{
var user1={firstname: "John", lastName: "Smith"}
const user2={firstname: "Sam", lastName: "Smith"}

res.json([user1,user2])

   // res.send("hi from users")
})
app.listen(3002,()=>{
    console.log("server is listening")
})