var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Price', { useNewUrlParser: true });

/* GET home page. */
router.get('/', function(err, res) {
  Product.find({}).exec(function(err,saudis){
    if(err)console.log("error occured");
    else{
      res.render('index', { title: 'Shopping Cart' , products: saudis });
    }
  });
});

module.exports = router;
