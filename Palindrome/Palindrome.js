var Palindrome = {
	isPalindrome: function(str){
		return (str === str.split('').reduce((acumulator, element) => element + acumulator, ''));
	},
	isPalindrome1: function(str){
		return str.split('').every((element, index) => {
			return element === str[str.length - index - 1];
		});
	},
	isPalindrome2: function(str){
		return (str === str.split('').reverse().join(''));
	},
	isPalindrome3: function(str){
		var reverse = '';
		for(let character of str){
			reverse = character + reverse;
		}
		return (str === reverse);
	}	
}

module.exports = Palindrome;
