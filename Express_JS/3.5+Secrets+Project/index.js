//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
var ans = ""
var bool = false
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended: true}))

function checkAns(req,res,next){
    ans = req.body["password"]
    if(ans==="ILoveProgramming"){
        bool = true
    }
    next();
}

app.use(checkAns)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check",(req,res)=>{
    if(bool){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.sendFile(__dirname + "/public/index.html")
    }
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})