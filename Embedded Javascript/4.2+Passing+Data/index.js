import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var heads = "Enter your name below 💖😶‍🌫️";
app.get("/", (req, res) => {
  const func = {
    header: heads
  }
  res.render("index.ejs",func)
});

app.post("/submit", (req, res) => {
  var head = req.body["fName"] + req.body["lName"]
  const func = {
    header: `There are ${head.length} letters in your name.👍👌`,
  }
  res.render("index.ejs",{header: `There are ${head.length} letters in your name.👍👌`} );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
