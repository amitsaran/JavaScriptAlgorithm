var ReverseString = {
	reverseString: function(str){
		return str.split('').reverse().join('');
	},
	reverseString1: function(str){
		var reverse = '';
		for(let character of str){
			reverse = character + reverse;
		}
		return reverse;
	}
}

module.exports = ReverseString;
