const express = require("express");

const app = express();

app.use(express.json());

app.post("/reviews",(req,res)=>{
    console.log(req.body);
    res.json({message : req.body});
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})