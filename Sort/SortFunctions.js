var SortFunctions = {
	mergeSort: function(inputArray, sortFn = function (a, b) { return a - b;}){
		var inArray = inputArray.slice();	
		return this._mergeSortR(inArray, sortFn);		
	},
	//    T(n) = C,  if n = 1
	//         = T(n/2) + T(n/2) + C1*n + C2,   if n > 1
	//
	//		Here are the places in the following function that can be counted towards time complexity
	// 		  T(n/2) -> calling the mergeSort for n/2 members, we have called two times, one for the left half, other for the right half
	//      C1*n -> adding left half to an array, adding right half to an array, merging them
	//      C2 -> comparison, add, subtraction, devide, multiply etc
	//
	//    T(n) = T(n/2) + T(n/2) + C1*n + C2 ~   2*T(n/2) + C1*n
	//    T(n) = 2*T(n/2) + C1*n 
	//         = 2 * ( 2*T(n/4) + C1*(n/2)) + C1*n
	//         = 4*T(n/4) + 2*C1*n               2C1*n > (C1*(n/2)) + C1*n), for simplicity we will take 2C1*n
	//         = 8*T(n/8) + 3*C1*n
	//         = 16*T(n/16) + 4*C*n
	//         = 2^k*T(n/2^k) + K*C*n 
	//    as we know T(1) is a constant => n/2^k = 1
	//                                  => 2^k = n
	//                                  => k = log n
	//         = (2^(log n)) * T(n/2^logn) + log n * C` * n
	//         = (2^(log n)) * T(n/2^logn) + n log n * C`
	//         = (2^(log n)) * T(0) + n log n * C`
	//         = (2^(log n)) * C + n log n * C`
	//         = n * C + n log n * C`        we know (2^(logn)) = n
	//
	// space complexity will be n log n 
	// R -> Recursive
	_mergeSortR: function(inArray, sortFn){  
		if (inArray.length === 1){
			return inArray;
		}
		const middle = Math.floor(inArray.length / 2);
		const left = inArray.slice(0, middle);
		const right = inArray.slice(middle); 
		return this._merge(this._mergeSortR(left, sortFn), this._mergeSortR(right, sortFn), sortFn);
	},
	_merge: function(left, right, sortFn){
		var outArray = [];
		let indxLeft = 0;
		let indxRight = 0;
		while(indxLeft < left.length && indxRight < right.length){
			if(sortFn(left[indxLeft], right[indxRight]) <= 0){
			//if(left[indxLeft] <= right[indxRight]){
				outArray.push(left[indxLeft]);
				indxLeft++;
			}
			else{
				outArray.push(right[indxRight]);
				indxRight++;
			}    
		}
		while(indxLeft < left.length){
			outArray.push(left[indxLeft]);
			indxLeft++;
		}
		while(indxRight < right.length){
			outArray.push(right[indxRight]);
			indxRight++;
		}
		return outArray;
	}
}

module.exports = SortFunctions;
