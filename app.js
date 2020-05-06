//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "I'm Rakshit Vyas. Currently pursuing BTech in Computer Science from LNCT Bhopal. Passionate about programming and design. I enjoy applying my skills to my personal projects. I'm a keen learner. I'm a goal-oriented person who has a Never-give-up attitude. I'm a self motivated personality who is sociable with all.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

let posts = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home",{
    starting_content: homeStartingContent,
    posts :posts
  });
});

app.get("/about",function(req,res){
  res.render("about",{about_content: aboutContent});
});

app.get("/contact",function(req, res){
  res.render("contact", { contact_content: contactContent});
})


app.get("/compose",function(req,res){
  res.render("compose");
});

app.post("/compose",function(req,res){
  const post ={
    title : req.body.postTitle,
    content : req.body.postBody
  };

  posts.push(post);

  res.redirect("/");
});

app.post(3000,function(){
  console.log("server is running at port 3000.");
});

app.get("/posts/:postName",function(req,res){
  const requestedTitle= _.lowerCase(req.params.postName);

  posts.forEach(function(post){
  const storedTitle = _.lowerCase(post.title);

  if(requestedTitle ===  storedTitle){
    res.render("post",{
      title : post.title,
      content: post.content
    });
  }
});

})









app.listen(3000, function() {
  console.log("Server started on port 3000");
});
