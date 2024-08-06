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
const url_author = "https://openlibrary.org/api/books"
app.get("/", async (req, res)=>{
    res.render("index.ejs")
})

let last_url, last_value, last_key = '', last_note ='', data_book;

app.post("/submit", async (req,res)=>{
    const value = req.body.value;
    const key = req.body.key;
    const url = `${url_book}/${key}/${value}-S.jpg`;
    last_key = key;
    last_value = value;
    last_url = url;
    try{
        const data = await axios.get(`${url_book}/${key}/${value}-L.jpg`);
        res.render("submit.ejs", {
            img: `${url_book}/${key}/${value}-S.jpg`
        })
    }catch(err){
        res.redirect("/")
        console.log("Can't get api data from this url. Try again!", err.message);
    }
})
app.post("/add", async (req,res)=>{
    const note = req.body.note;
    last_note = note;
    try{
        const data = await (await axios.get(`${url_author}?bibkeys=${last_key.toUpperCase()}:${last_value}&jscmd=data&format=json`)).data
        const result = data[`${last_key.toUpperCase()}:${last_value}`]
        data_book = result;
        res.render("card-storage.ejs", {
            img: last_url,
            title: result.title,
            subtitle: result.subtitle
        })
    }catch(err){
        res.redirect("/submit")
        console.log("Can't get this url. Something went wrong...", err.message)
    }
})


app.post("/note", (req,res)=>{
    res.render("book-content.ejs",{
        subtitle: data_book.subtitle,
        title: data_book.title,
        author: data_book.authors[0].name,
        content: last_note
    })
})
app.listen(port,()=>{
    console.log(`Running on port http://localhost:${port}`)
})
