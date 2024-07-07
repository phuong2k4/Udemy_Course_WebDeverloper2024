import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"))

var date = new Date()
const param = {
    uvpoint: "What's UV point today?",
    notice: "",
    uvmax: "",
    time: "Thời gian tia UV sảy ra mạnh nhất ?",
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
}

app.get("/",(req,res)=>{
    res.render("index.ejs",param)
})
try{
    
    const api_key1 = "openuv-3i9h12zrlybilrkm-io"
    const api_key2 = "openuv-3i9h12zrlybs9nj8-io"
    var lat = 51.507351
    var long = -0.127758
    
    app.get("/submit", async(req,res)=>{
        const response = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${long}`,{
            headers: {
            "x-access-token":  api_key2,
            }
        })
        const result = response.data
        JSON.stringify(result)

        var parameter = {
            uvpoint: `UV point today is : ${result.result.uv}`,
            notice: result.result.uv,
            uvmax: result.result.uv_max,
            time: `Thời gian tia UV sảy ra mạnh nhất là: ${result.result.uv_max_time} ?`,
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        }
        res.render("index.ejs",parameter)
    })
}catch(err){
    console.log(err.message)
    res.render("index.ejs")
}

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})