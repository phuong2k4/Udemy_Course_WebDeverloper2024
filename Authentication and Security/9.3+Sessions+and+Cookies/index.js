import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//
app.use(session({
  secret: 'TOPSECRETWORD',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge:1000*60*60*24,
  }
}))

app.use(passport.initialize());
app.use(passport.session())

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secret",
  password: "0",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

//
app.get("/secrets",(req,res)=>{
  if (req.isAuthenticated()){
    res.render("secrets.ejs")
  }else{
    res.redirect("/login");
  }
})

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) returning*",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err)=>{
            console.log(err);
            res.redirect("/secrets")
          })
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secrets",
  failureRedirect: "/login"
}));

//
passport.use(new Strategy( async function verify(username, password, callback){
  console.log(username)
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return callback(err);
        } else {
          if (result) {
            return callback(null, user)
          } else {
            return callback(null, false)
          }
        }
      });
    } else {
      return callback("User not found")
    }
  } catch (err) {
    callback(err)
  }
}))

//
passport.serializeUser((user,callback)=>{
  callback(null,user)
});

//
passport.deserializeUser((user,callback)=>{
  callback(null,user)
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
