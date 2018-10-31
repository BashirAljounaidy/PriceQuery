var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    ProductName : {type: String, required: true},
	arNAme : {type: String, required: true},
	CaseCredit : {type: Number, required: true},
	Price : {type: Number, required: true},
	Kind : {type: String, required: true},
	Code : {type: Number, required: true},
	Auto : {type: Boolean, required: true},
	NewDistributer : {type: Number, required: true},
	AssistantSupervisor :{type: Number, required: true},
	Supervisor : {type: Number, required: true},
	AssistantManager : {type: Number, required: true},
	Manager : {type: Number, required: true},
	Shipping  : {type: Number, required: true}
}

);

module.exports = mongoose.model('Saudi', schema,'saudis');