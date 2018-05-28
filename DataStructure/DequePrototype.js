// this is a data structure for both Stack and Queue
function QueueStack() {
  this._array = [];
}


// private member
QueueStack.prototype._left = function(){ 
	return (this.size() > 0)?(this._array[0]):undefined; 
};
QueueStack.prototype._right = function(){ 
	return (this.size() > 0)?(this._array[this.size() - 1]):undefined; 
};

// public variables 
QueueStack.prototype.size = function(){ return (this._array)?this._array.length:-1; };
QueueStack.prototype.isEmpty = function(){ return (this.size() > 0)?false:true; };

//  Queue
QueueStack.prototype.front = function(){ return this._left(); };
QueueStack.prototype.back = function(){ return this._right(); };

//  Stack
QueueStack.prototype.top = function(){ return this._right(); };
QueueStack.prototype.bottom = function(){ return this._left(); };

// private functions, don't use them
//   add a value at the zeroth placee 
QueueStack.prototype._addLeft = function(value){ this._array.unshift(value); };
//   add a value at the end of the array 
QueueStack.prototype._addRight = function(value){ this._array.push(value); };
//   removes the value at the zeroth placee 
QueueStack.prototype._removeLeft = function(){ return this._array.unshift(); };
//   removes the value at the end of the array 
QueueStack.prototype._removeRight = function(){ return this._array.pop(); };


// public functions:
//  Queue
QueueStack.prototype.enqueue = function(value){ this._addRight(value); };
QueueStack.prototype.dequeue = function(){ return this._removeLeft(); };

//  Stack
QueueStack.prototype.push = function(value){ this._addRight(value); };
QueueStack.prototype.pop = function(){ this._removeRight(); };

var q1 = new QueueStack();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
var size_q1 = q1.size();
var front_q1 = q1.front();
var back_q1 = q1.back();
console.log('Queue size: ' + size_q1 + ', front: ' + front_q1 + ', back: ' + back_q1);

var s1 = new QueueStack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
var size_s1 = s1.size();
var top_s1 = s1.top();
var bottom_s1 = s1.bottom();
console.log('Stack size: ' + size_s1 + ', bottom: ' + bottom_s1 + ', top: ' + top_s1 );
