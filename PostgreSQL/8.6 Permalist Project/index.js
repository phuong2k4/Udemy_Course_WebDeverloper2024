import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'permalist',
  password: '0',
  port: '5432'
});

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function getItems(){
  const result = await db.query("select * from items");
  items = result.rows
  return items;
}

app.get("/", async (req, res) => {
  const item = await getItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: item,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try{
    await db.query("Insert into items(title) values ($1)",[item])
  }catch(err){
    console.error("Error query database...",err.message);
  } 
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const title_change = req.body
  try{
    await db.query("update items set title = ($1) where id = ($2)", [title_change.updatedItemTitle, title_change.updatedItemId])
    res.redirect("/")
  }catch(err){
    console.log("Query unsuccessful. Try another ways...", err.message);
  }
});

app.post("/delete", async (req, res) => {
  const del_index = req.body.deleteItemId
  console.log(`Title have index ${del_index} delete complete...`)
  try{
    await db.query("delete from items where id = $1",[del_index])
    res.redirect("/")
  }catch(err){
    console.error("Delete rejected.", err.message);
  }

});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
