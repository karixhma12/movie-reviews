const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(new Date().toISOString());
    next();
})

app.get("/",(req,res)=>{
    res.json({message : "A request has come in!"});
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})