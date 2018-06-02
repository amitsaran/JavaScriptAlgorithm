var PrimeNumber = {
	// for details about the algorithm, please refer to https://primes.utm.edu/notes/faq/six.html
	isPrime: function(n){
		if(n < 2){
			return false;
		}
		else if ( n === 2 || n === 3){
			return true;
		}
		else if((n % 2 === 0) || (n % 3 === 0)){
			return false;
		}

		// i = 6k-1, 6k+1
		var i = 5, w = 2;
		while(i*i <= n){
			if (n % i === 0){
				return false;
			}
			i = i + w;
			w = 6 - w;
		}

		return true;
		
	},
	// try out all the numbers less than square root
	isPrime1: function(n){
		if(n < 2){
			return false;
		}
		for(var i = 2; i*i < n; i++){
			if(n % i === 0){
				return false;
			}
		}  
		return true;		
	}
}

module.exports = PrimeNumber;
