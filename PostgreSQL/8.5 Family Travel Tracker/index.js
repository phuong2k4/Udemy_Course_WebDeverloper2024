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
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisisted() {
// query den database visited_countries
// khi press den user nao thi user do tra ve country data voi dieu kien visited countries have same value with userid 
  const result = await db.query("select * from visited_countries as vsc join users as us on us.id = vsc.user_id where vsc.user_id = ($1);",[currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

//function return all row in users database
async function addNewUser() {
  const result = await db.query("SELECT * FROM users");
  users = result.rows
// return user have id same with id  when user press button 
  return users.find((user)=>user.id == currentUserId);
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const user = await addNewUser();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: user.color,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  const user = await addNewUser();
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code,user_id) VALUES ($1,$2)",
        [countryCode,currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
/* action "/user" method "post" return index.ejs to */
app.post("/user", async (req, res) => {
// method nay tra ve user visit country theo user id number
  if (req.body.add==="new"){
// add family member name = add tra ve value = new 
    res.render("new.ejs")
  }else{
//user id number tuong ung voi id trong database users
//user have id 1 will return id 1 
    currentUserId = req.body.user
// redirect tra ve mot trang url khac ("/" tra ve trang root )
    res.redirect("/")
  }
});


  /*Hint: The RETURNING keyword can return the data that was inserted. 
  https://www.postgresql.org/docs/current/dml-returning.html */

  /*action '/new' method : 'post'*/
app.post("/new", async (req, res) => {
// method create and insert new data to database users
  (await db.query("insert into users(name, color) values ($1,$2) returning *" ,[req.body.name,req.body.color])).rows.forEach((id)=>{
// push new data in array storage users
    users.push(id)
// return new id or new user index 
    currentUserId = id.id
  })
// return url root to update data
  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
