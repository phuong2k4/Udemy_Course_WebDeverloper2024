import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "storage_book",
    password: "0",
    port: 5432
})
db.connect();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
const url_book = "https://covers.openlibrary.org/b"

app.get("/", async (req, res)=>{
    res.render("index.ejs")
})


app.post("/submit", async (req,res)=>{
    const value = req.body.value;
    const key = req.body.key;
    try{
        const data = await axios.get(`${url_book}/${key}/${value}-L.jpg`);
        res.render("submit.ejs", {
            img: `${url_book}/${key}/${value}-S.jpg`
        })
    }catch(err){
        console.log("Can't get api data from this url. Try again!", err.message);
    }
    res.render("submit.ejs")
})


app.post("/add",(req,res)=>{
    res.render("card-storage.ejs")
})

app.get("/note", (req,res)=>{
    console.log("got clicked")
    res.render("book-content.ejs")
})
app.listen(port,()=>{
    console.log(`Running on port http://localhost:${port}`)
})