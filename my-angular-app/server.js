const express = require("express")
const path = require("path")

const app = express();

app.listen(4200, (req, res)=>{
    console.log('RUNNING');
})