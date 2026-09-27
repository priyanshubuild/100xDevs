// http server that suppports 4 routes (/sum,/sub,/div,/mul)

//express hono,elysijs,trpc

const express=require("express")
const app=express()
app.get("/sum",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
 
    const sum=a+b;
    res.json({
        ans:sum
    })
})
app.get("/sub",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
 
    const sub=a-b;
    res.json({
        ans:sub
    })
})
app.get("/mul",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
 
    const mul=a*b;
    res.json({
        ans:mul
    })
})
app.get("/div",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
 
    const div=a/b;
    res.json({
        ans:div
    })
})

app.listen(3000);