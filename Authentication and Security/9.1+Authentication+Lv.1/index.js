import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  host: 'localhost',
  database:'secret',
  user: 'postgres',
  password: '0',
  port: 5432
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try{
    const extract_db = await db.query("select * from auth");
    extract_db.rows.forEach( async (user)=>{
      if (email===user.email_user){
        res.send("Email already exists... Try another email or Wanna log in ?")
      }else {
        try{
          const add_data = await db.query("Insert into auth(email_user, password_user) values ($1,$2)", [
            email,
            password
          ])
          res.render("secrets.ejs");  
        }
      catch(err){
        console.log("Error query database...", err.message)
      }}
  })}catch(error){
    console.log("Query cant continue, something wrong...", error.message)
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try{
    const auth_data = await db.query("select * from auth")
    auth_data.rows.forEach( (user) => {
      if(email===user.email_user && password === user.password_user){
        res.render("secrets.ejs");
      }else{
        res.send("Wrong email or password, try again...")
      }
    })
  }catch(error){

    console.log("Query cant continue, something wrong...", error.message)
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
