import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "countryWorld",
  password: "0",
  port: 5432
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
db.connect();

var data_country = [];
var total = 0;
app.get("/", async (req, res) => {
  //Write your code here.

   db.query("select * from visited_countries",  (err, resp)=>{
    if(err){
      console.error("Error query!",err.stack);
    }else{
      total = resp.rows.length
      resp.rows.forEach((row)=>{
        data_country.push(row.country_code)
      })
    }
    res.render("index.ejs", {
      total: total,
      countries: data_country
    })
  })
})

app.post("/add", async (req,res)=>{
  const data_frm_user = req.body.country
  
  try{
    const data_c = await db.query("Select country_code from countries where country_name = $1",[data_frm_user])
    const data_code = data_c.rows[0].country_code
    try{
      await db.query("insert into visited_countries(country_code) values ($1)", [data_code])
      data_country.push(data_code)
      res.render("/",{
        total: total,
        countries: data_country
      })
    }
    catch(err){ 
      res.render("index.ejs",{
        error: "You keep try entered same value, try another country if you know on your mind.",
        total: total,
        countries: data_country
      })
      console.log("E_I",err.message)
    }
  }catch (err){
    res.render("index.ejs",{
      error: "Error",
      total: total,
      countries: data_country
    })
    console.log("E_O",err.message)
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});