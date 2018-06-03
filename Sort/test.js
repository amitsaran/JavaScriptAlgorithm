const SortFunctions = require('./SortFunctions');

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];

test('SortFunctions o arebject defined', () => {
	expect(typeof SortFunctions).toEqual('object');
});

test('mergeSort related functions are defined', () => {
	expect(typeof SortFunctions.mergeSort).toEqual('function');
	expect(typeof SortFunctions._mergeSortR).toEqual('function');
	expect(typeof SortFunctions._merge).toEqual('function');
	
	expect(Array.isArray(inputArray)).toEqual(true);
	var sortFnAscending = function (a, b) { return a - b;};
	var sortFnDescending = function (a, b) { return b - a;};
	expect(inputArray.slice().sort(sortFnAscending).join(',') === SortFunctions.mergeSort(inputArray, sortFnAscending).join(',')).toEqual(true);
	expect(inputArray.slice().sort(sortFnDescending).join(',') === SortFunctions.mergeSort(inputArray, sortFnDescending).join(',')).toEqual(true);	
});

