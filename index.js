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

app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({sum : a+b});
})

app.get("/multiply",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({product : a*b});
})

app.get("/divide",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(b==0){
        res.json({message : "Division by 0 is not possible!"});
    }
    else{
        res.json({answer : a/b});
    }
})

app.get("/subtract",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({answer : a-b});
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})