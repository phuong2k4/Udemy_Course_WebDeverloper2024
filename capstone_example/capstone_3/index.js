import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { url } from "inspector";

const app = express();
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))

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


// about page
app.get("/abouts/siddhartha.html",(req,res)=>{
    res.sendFile(__dirname + "/views/abouts/siddhartha.html")
})
app.get("/abouts/anna.html",(req,res)=>{
    res.sendFile(__dirname + "/views/abouts/anna.html")
})
app.get("/abouts/nhatthuc.html",(req,res)=>{
    res.sendFile(__dirname + "/views/abouts/nhatthuc.html")
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})