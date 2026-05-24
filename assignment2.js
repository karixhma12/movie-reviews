const express = require("express");

const app = express();

app.use(express.json());

function middlewareFunction(req,res,next){
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).json({message : "No token provided!"});
    }
    if(token!=="mytoken123"){
        return res.status(403).json({message : "Wrong token provided!"});
    }
    
    next();    
}

app.get("/",middlewareFunction,(req,res)=>{
    res.json({message : "You are welcome!"});
})

app.get("/sum",middlewareFunction,(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.json({answer : a+b});
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})