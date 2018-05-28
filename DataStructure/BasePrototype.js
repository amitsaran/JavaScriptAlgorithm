// this is a data structure for both Stack and Queue
var BasePrototype = {
	//this._array = [];
	size: function(){ return (this._array)?this._array.length:-1; },
	isEmpty: function(){ return (this.size() > 0)?false:true; },
	_left: function(){ return (this.size() > 0)?(this._array[0]):undefined; },
	_right: function(){ return (this.size() > 0)?(this._array[this.size() - 1]):undefined; },
	//_addLeft: function(value){ this._array.unshift(value); },
	_addRight: function(value){ this._array.push(value); }	
};

module.exports = BasePrototype;

