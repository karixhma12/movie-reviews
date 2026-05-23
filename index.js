const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.json({message : "Movie Review API is running!"});
})

app.get("/show-headers",(req,res)=>{
    res.json(req.headers);
})

app.get("/secret",(req,res)=>{
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).json({message : "No token provided!"});
    }
    if(token!=="mytoken123"){
        return res.status(403).json({message : "Wrong token!"});
    }

    res.json({message : "Welcome! You are authorized!"});
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})