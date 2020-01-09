//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const loda =require("lodash");
require('dotenv').config()
const mongoose = require('mongoose');
const homeStartingContent = "Hello, my name is Akshat.I have been in interested in software engineering since grade 5, back then I dont I even understood what exactly what it was. But since the past 2-3 years I think I have realised how complex and elegant all this is.This is part of my 45 day project(which has been extended indefinitely since The Rome was not built in 45 days).";
const aboutContent = "";
const contactContent = "masterakshata@gmail.com";
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true});
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const postSchema={
  postTitle:String,
  postContent:String,
  postDate:String
}
const Post=mongoose.model('Post',postSchema);
const adminSchema=mongoose.Schema({
  name:String,
  password:String
});
const Admin=mongoose.model('admin',adminSchema);

app.get('/',function(req,res){
  Post.find(function(err,foundPosts){
    if(!err){
      res.render('home',{
        homePageLorem:homeStartingContent,
        posts:foundPosts});
    }
  });
});
app.get('/posts/:post',function(req,res){
  // Post.findOne({postTitle:})
  const postId=req.params.post;
  Post.findById(postId,function(err,foundPost){
    res.render('post',{title:foundPost.postTitle,body:foundPost.postContent,date:foundPost.postDate});
  });

});
app.get('/admin',function(req,res){
  res.render('admin');
});
app.get('/about',function(req,res){
  res.render('about',{aboutMeLorem:aboutContent});
});

app.get('/contact',function(req,res){
  res.render('contact',{contactMeLorem:contactContent});
});

app.get('/compose',function(req,res){
  res.redirect('admin');
});

app.post('/compose',function(req,res){
const currentDate = new Date().toLocaleDateString('en-US',{hour:'numeric',minute:'numeric'});
  const post=new Post({
    postTitle:req.body.postTitle,
    postContent:req.body.postText,
    postDate:currentDate,
  });
  post.save();
  res.redirect('/');
});

app.post('/logmein',function(req,res){
  console.log("reached here");
  Admin.findOne({name:req.body.cred,password:req.body.pwd},function(err,foundAdmin){
    if(err){
      console.log(err);
      res.redirect('/');
    }else{
      console.log("reached here 2");
      if(foundAdmin){
        res.render('compose');
      }
    }
  })
})
app.listen(process.env.PORT|| 3000, function() {
  console.log("Server started on port 3000");
});
