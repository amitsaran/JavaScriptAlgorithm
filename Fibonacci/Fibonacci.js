// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

var Fibonacci = {
	fib: function fib(n){
		var prev = -1, result = 1, sum = 0;
		for(var i = 0; i <= n; i++)
		{
		  sum = result + prev;
		  prev = result;
		  result = sum;
		}
		return result;
	},
	// Time Complexity:
	//  f(n) = f(n-1) + f(n-2)           if n > 1
	//       = 1                         if n = 0, 1
	// Step1. 
	//		Here are the places in the following function that can be counted towards time complexity
	// 		a -> if(n <= 1) -> constant time ~ 1 unit
	// 		b -> fibonacciR(n-1) -> T(n-1) + (constant time(for n-1) ~ 1 unit)
	// 		c -> fibonacciR(n-2) -> T(n-2) + (constant time(for n-2) ~ 1 unit)
	// 		d -> the addition of #b and #c -> constant time ~ 1 unit
	// Step2.
	//		T(n) = T(n-1) + T(n-2) + C			   C = 4, as mentioned in #a, #b, #c, #d
	//				 = 2 * T(n-1) + C			   Lets do an approximation T(n-1) ~ T(n-2)
	//				 = 2 * (2 * T(n-2) + C) + C
	//				 = 4 * T(n-2) + 3C
	//				 = 8 * T(n-3) + 7C
	//				 = 16 * T(n-4) + 15C
	//         = 2^k * T(n-k) + (2^k-1) * C
	//    as T(0) = 1, n = k
	//         = 2^n * T(0) + (2^n-1) * C
	//         = 2^n (1+C) - C 
	//
	//    n-4 = 0; n = 4
	// Step3. 
	//		Time to generalize
	//		T(n) = 2^n * T(0) + (2^n-1) * C
	//				 = 2^n * T(0) + 2^n * C - 1 * C
	// 				 = 2^n * (1+C) - C				T(0) = 1, if you refer to the function only if condition will be  executed when n = 0
	// T(n) is propertional to 2^n
	// R -> Recursive
	fibR: function(n){
		if(n <= 1){
			return n;
		}
		else{
			return Fibonacci.fibR(n-1) + Fibonacci.fibR(n-2);
		}
	},
  
	// RT -> Tail Recursive 
	fibRT: function (n){
		function fibonacciHelper(n, prev, result){
			if (n === 0){
				return prev;
			}
			return fibonacciHelper(n-1, result, prev+result);
		}
		return fibonacciHelper(n, 0, 1);
	}, 

	// RDP -> RecursiveDynamicProgramming
	// This is same as DPTD -> DynamicProgrammingTopDown
	fibRDP: function(n, memo = []){
		var result;
		if(memo && memo[n]){
			result = memo[n];
		}
		else if(n <= 1){
			result = n;
		}
		else{
		   result = Fibonacci.fibRDP(n-1, memo) + Fibonacci.fibRDP(n-2, memo);
		}
		memo[n] = result;
		return memo[n];
	},

	// DPBU -> DynamicProgrammingBottomUp
	fibDPBU:  function (n){
		var memo = [];
		memo[0] = 0;
		memo[1] = 1;
		for(var i = 2; i <= n; i++){
			memo[i] = memo[i-1] + memo[i-2];
		}
		return memo[n];
	}
}

module.exports = Fibonacci;