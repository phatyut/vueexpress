const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const data = require("./data/pulldata.json");
const user = require("./data/users.json");
const localhost = "localhost";
const port = 9000;


app.get("/",(req,res)=>{
    res.send("Please check base url to show data");
})

app.get("/showdata",(req,res)=>{
    res.json(data);
})

app.get("/users",(req,res)=>{
    res.json(user);
})

app.listen(port,()=>{
    console.log(localhost +":" +port);
})