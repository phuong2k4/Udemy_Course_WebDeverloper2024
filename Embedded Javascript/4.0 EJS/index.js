import express from "express";

const app = express();
const port = 3000;

const date = new Date()
var day = date.getDay()

var dayN =  "a week day";
var todoW = "work hard";

if (day === 6){
    dayN ="the weekend";
    todoW ="have fun"
}

app.get("/",(req,res)=>{
    res.render("index.ejs",
        {
            day: dayN,
            todo: todoW,
        }
    )
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})