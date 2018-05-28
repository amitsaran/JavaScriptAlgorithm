var StackPrototype = {
	_removeRight: function(){ return this._array.pop(); },
	bottom: function(){ return this._left(); },
	top: function() { return this._right(); },
	push: function(value){ this._addRight(value); }, 
	pop: function(){ return this._removeRight(); }
};

module.exports = StackPrototype;
/*
var Queue = Object.assign({}, BaseFn, QueueFn);
var Stack = Object.assign({}, BaseFn, StackFn);
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

var q1 = DataStructureFactory.createQueue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
var size_q1 = q1.size();
var front_q1 = q1.front();
var back_q1 = q1.back();
console.log('Queue size: ' + size_q1 + ', front: ' + front_q1 + ', back: ' + back_q1);

var s1 = DataStructureFactory.createStack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
var size_s1 = s1.size();
var top_s1 = s1.top();
var bottom_s1 = s1.bottom();
console.log('Stack size: ' + size_s1 + ', bottom: ' + bottom_s1 + ', top: ' + top_s1 );
*/
