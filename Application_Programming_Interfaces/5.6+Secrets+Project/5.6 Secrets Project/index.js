// HINTS:
// 1. Import express and axios
import express from "express"
import axios from "axios"
// 2. Create an express app and set the port number.
const app = express()
const port = 3000
// 3. Use the public folder for static files.
app.use(express.static("public"))
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req,res)=>{
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
    try{
        const response = await axios.get("https://secrets-api.appbrewery.com/random")
        const result = response.data
        const param = {
            secret: result.secret,
            user: result.username,
        }
        res.render("index.ejs", param)
    }
    catch(err){
        console.log(err.message)
        res.render("index.ejs", {user: err.message})
    }
})


// 6. Listen on your predefined port and start the server.
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})