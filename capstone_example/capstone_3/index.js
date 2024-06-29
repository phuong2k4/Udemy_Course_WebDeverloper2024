import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var email = "User"
const func = {
    name: email
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/",(req,res)=>{
    
    res.render("index.ejs", func)
})

app.get("/index",(req,res)=>{
    res.render("index.ejs",func)
})


app.get("/about",(req,res)=>{
    res.render("about.ejs")
})


app.post("/submit", (req,res)=>{
    var emailN = req.body["email"]
    const param ={
        name: emailN,
    }
    res.render("index.ejs", param)
})


app.get("/login",(req,res)=>{
    res.render("login.ejs")
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})