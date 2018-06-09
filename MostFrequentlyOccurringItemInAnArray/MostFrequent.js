function MostFrequent(inputArray){	
	var mostFrequent;
	if(!inputArray || !(Array.isArray(inputArray))){
		return mostFrequent;
	}
	var temp = [];
  	var max_count = 0;
	inputArray.forEach(function(element){
		if(temp[element]){
			temp[element] ++;      
		}
		else{
			temp[element] = 1;
		}
		if(temp[element] > max_count){
			max_count = temp[element];
		mostFrequent = element;
		}
	}, this);
	return mostFrequent;
}

module.exports = MostFrequent;
