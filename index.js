const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.json({message : "Movie Review API is running!"});
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})