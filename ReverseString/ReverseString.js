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
	},
	reverseString2: function(str){
		return str.split('').reduce((acumulator, element) => element + acumulator, '');
	}
}

module.exports = ReverseString;
