function nSum(nums, target) {
	var retVal = [];
	var m = nums.reduce(function(accumulator, currentValue, currentIndex){
		if (accumulator.has(currentValue)){
			var arrayValues = [accumulator.get(currentValue), currentIndex]
			accumulator.set(currentValue, arrayValues);
		}
		else{
			accumulator.set(currentValue, currentIndex);
		}
		return accumulator;
	}, new Map());
	for (let [key, value] of m) {
		if(Array.isArray(value) && m.get(target-key) === value){
			retVal = [value[0], value[1]];
			break;
		}
		else if(m.get(target-key)){
			retVal = [value, m.get(target-key)];
			break;
		}      
	}
	return retVal;
};

module.exports = nSum;
