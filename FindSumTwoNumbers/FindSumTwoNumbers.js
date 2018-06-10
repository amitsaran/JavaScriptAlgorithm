function nSum(nums, target) {
	var retVal = [];
	const hash = {};
	for (let i = 0; i < nums.length; i++) {
		const newTarget = target - nums[i];
		if (hash[newTarget] !== undefined) {
			retVal = [hash[newTarget], i];
			break;
		}
		hash[nums[i]] = i;
	}
	return retVal;
};

module.exports = nSum;
