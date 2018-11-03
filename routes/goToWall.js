var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var DBconnect = require ('./dbConfig');
var functions = require('./functions');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var pool = new DBconnect();


router.post('/', function(req, res){
  var wallID = req.body.friendID;
  var friendName = req.body.friendName;
  var userID = req.body.userID;
  var userName = req.body.userName;
  console.log(friendName);
  console.log(wallID);
  console.log(userID);

  let wallPosts = new Promise(function(resolve, reject){

    resolve(functions.getWall(wallID, userID));
  });

  wallPosts.then(function(wall){
    res.render('parenthomepage', wall);
  });
});



module.exports=router;
