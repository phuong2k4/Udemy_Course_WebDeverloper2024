import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

var band = ""
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended: true}))

function bandNameGenerator(req,res,next){
  band = req.body["street"] + req.body["pet"];
  next();
}
app.use(bandNameGenerator);
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})
app.post("/submit",(req,res)=>{
  res.send(`<h1>Your band name is: </h1> <h2>${band}</h2>`)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
