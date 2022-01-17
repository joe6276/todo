const express = require('express')
const app= express();
const cors= require('cors')
const todorouter=require('./Routes/index')

app.use(cors());
app.use(express.json());
app.use("/todos", todorouter)




app.listen(4000, ()=>{
    console.log("Running...")
})