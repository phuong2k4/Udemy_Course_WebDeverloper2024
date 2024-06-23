import express from "express"
const app = express();
const port = 3000;

app.get("/",(request,respond)=>{
  respond.send("<h1>Hello Guys</h1>");
});
app.get("/contact",(request,respond)=>{
  respond.send("<h1>Contact me</h1>");
});
app.get("/about",(request,respond)=>{
  respond.send("<h1>About me</h1>");
});

// app.get("/",(request,respond)=>{
//   respond.send(request.rawHeaders);
// });


app.listen(port,()=>{
  console.log(`server running on port ${port}`);
});