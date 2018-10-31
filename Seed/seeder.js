var Adder = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Price', { useNewUrlParser: true });
var product = new Adder({
    ProductName : 'test',
	arNAme : 'test',
	CaseCredit : '0',
	Price : '0',
	Kind : 'aloe',
	Code : '0',
	Auto : 'false',
	NewDistributer : '0',
	AssistantSupervisor :'0',
	Supervisor : '0',
	AssistantManager : '0',
	Manager : '0',
	Shipping  : '0'
    });
    product.save(function(error){
        console.log("Saved..");
        if(error){
            console.error
        }
    });
