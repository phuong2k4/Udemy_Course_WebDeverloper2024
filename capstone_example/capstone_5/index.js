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

app.get("/", async (req, res)=>{
    res.render("card-storage.ejs")
})

app.listen(port,()=>{
    console.log(`Running on port http://localhost:${port}`)
})