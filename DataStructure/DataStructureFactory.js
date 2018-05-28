const BasePrototype = require('./BasePrototype');
const QueuePrototype = require('./QueuePrototype');
const StackPrototype = require('./StackPrototype');

var Queue = Object.assign({}, BasePrototype, QueuePrototype);
var Stack = Object.assign({}, BasePrototype, StackPrototype);
var DataStructureFactory = {
	_create: function(prototypeOfObj){
		var dt = Object.create(prototypeOfObj);
		dt._array = [];
		return dt;
	},
	createStack: function(){
		return this._create(Stack);
	},
	createQueue: function(){
		return this._create(Queue);
	}
}

module.exports = DataStructureFactory;
