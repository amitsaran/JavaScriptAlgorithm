var QueuePrototype = {
	_removeLeft: function(){ return this._array.shift(); },
	front: function(){ return this._left(); },
	back: function() { return this._right(); },
	enqueue: function(value){ this._addRight(value); }, 
	dequeue: function(){ return this._removeLeft(); }
};

module.exports = QueuePrototype;

/*


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
