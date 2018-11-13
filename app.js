const express= require('express')
const app=express()
const mysql=require('mysql')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("Hello from root")
})

 function getConnection(){
  return  mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Sanidhya@101',
        database: 'moviedb' 
    })
 }
app.post('/review',(req,res)=>{
   // console.log("in post") 
  //  console.log(" "+req.body.moviename)
    const name=req.body.name
    const movieName=req.body.moviename
    const movieReview=req.body.moviereview
    console.log(name+ movieName+movieReview)
    const queryString="Insert into review_table (name, movie_name, review) values (?,?,?)"
    getConnection().query(queryString, [name,movieName,movieReview] ,(err,results,fields)=>{
        if(err){
            console.log("SOmething wrong" + err)
            res.end()
            return 
        }
        console.log("inserted successfully")
        res.end()
    })
})

app.get("/:moviename",(req,res)=>{
    console.log("ncdnnf "+ req.params.moviename)

    const connection=getConnection()
    const queryString="select * from review_table  where movie_name=?"
    connection.query(queryString,[req.params.moviename],(err,rows,fields)=>{
        if(err){
            console.log("SOmething wrong" + err)
            res.end()
        }

        const movies= rows.map((row)=>{
            return{ movieName : row.movie_name,
                    movieReview : row.review}
        })
        console.log("fetched users sucessfully")
        res.json(movies)
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