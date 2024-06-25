import express from "express";
const app = express();
const port = 3000;

let bowl = ["apple", "orange", "banana"]

app.get("/",(req, res)=>{
  const func = {
    seconds: new Date().getSeconds(),
    fruits: bowl,
    tag: "<h1>EJS Tags</h1>",
    content: "<em>this is em text</em>"
  }
  res.render("index.ejs",func)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
