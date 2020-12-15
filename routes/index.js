var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
const fs = require('fs');
const api = require('../controller/crud');
AWS.config.update({
  region: 'us-east-2',
  //endpoint : 'http://localhost:8000'
  accessKeyId:'AKIA4X52LXILVULPVPVZ',
  secretAccessKey:'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'
})

var dynamo = new AWS.DynamoDB();
var docClient =  new AWS.DynamoDB.DocumentClient();
router.get('/',function(req,res){
  res.render('index',{title: "Gym for life Trang chủ"});

})
router.get('/thembt',function(req,res){
  res.render('thembt',{title: "Gym for life Trang chủ"});

})
router.get('/login',function(req,res){
  res.render('login',{title: "Gym for life Đăng nhập"});

})
router.get('/luyentap',api.getbaitapbyThu);
  

router.get('/lichtap',api.getallLichtap);
  
/* GET home page. */

router.get('/dsbt',api.getallBaitap);
router.post('/them',api.thembao);
router.get('/themlich',api.themlich);
router.get('/tim',api.sualayid3);

router.get('/xoa/:id',api.xoalichtap);

module.exports = router;
