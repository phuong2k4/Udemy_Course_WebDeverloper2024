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

async function getbook() {
    const db_book = (await db.query("select * from book_content;")).rows;
    return db_book;
}
app.get("/", async (req, res)=>{
    const data = await getbook();
    res.render("index.ejs" ,{
        bookData: data
    })
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
        res.redirect("submit.ejs")
        console.log("Can't get api data from this url. Try again!", err.message);
    }
})


app.post("/add", async (req,res)=>{
    const body = req.body.note;
    console.log(req.body)
    last_note = body;
    try{
        const data__ = await axios.get(`${url_author}?bibkeys=${last_key.toUpperCase()}:${last_value}&jscmd=data&format=json`)
        const result = data__.data[`${last_key.toUpperCase()}:${last_value}`];
        data_book = result;
        const db_add = await db.query("insert into book_content(img,title,subtitle,note,author) values ($1,$2,$3,$4,$5)",[
            last_url, result.title, result.subtitle, last_note, result.by_statement
        ])
        res.redirect("/")
    }
    catch(err){
        res.render("submit.ejs", {
            img: last_url
        })
        console.log("Query or url error, Try another way...", err.message)
    }
})
app.post("/note", async (req,res)=>{
    const body = req.body.index;
    try{
        const data = (await db.query("select * from book_content where id = ($1)", [body])).rows[0];
        res.render("book-content.ejs", {
            subtitle: data.subtitle,
            title: data.title,
            author: data.author,
            content: data.note
        })
    }catch(err){
        res.redirect("/");
        console.error("Can not query this code...",err.message)
    }
})

app.get("/return", (req,res)=>{
    res.redirect("/")
})
app.get("/note", (req,res)=>{
    res.redirect("/")
})
app.listen(port,()=>{
    console.log(`Running on port http://localhost:${port}`)
})
