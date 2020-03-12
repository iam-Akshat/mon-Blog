const express = require('express');
const ejs     = require('ejs');

const app= express()

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/',function(req,res){
    res.render('home',{pageTitle:"Akshat is Awesome"});
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Working okay");
});