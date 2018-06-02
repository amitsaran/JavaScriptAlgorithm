const PrimeNumber = require('./PrimeNumber');

const inputTests = [
	{input: 35, expectedResult: false},
	{input: 5609, expectedResult: false},	
	{input: 3484, expectedResult: false}, 
	{input: 7823, expectedResult: true}, 
	{input: 7039, expectedResult: true}, 
	{input: 2087, expectedResult: true},	 
	{input: 3457, expectedResult: true},	
	{input: 877, expectedResult: true}, 
	{input: 877, expectedResult: true},
	{input: 877, expectedResult: true},
	{input: 877, expectedResult: true}];

test('isPrime functions are defined', () => {
	expect(typeof PrimeNumber.isPrime).toEqual('function');
	expect(typeof PrimeNumber.isPrime1).toEqual('function');
});

test('check for all the numbers in inputTests array', () => {
	expect(Array.isArray(inputTests)).toEqual(true);
	inputTests.forEach((element) => {
		expect(PrimeNumber.isPrime(element.input)).toEqual(element.expectedResult);
		expect(PrimeNumber.isPrime1(element.input)).toEqual(element.expectedResult);
	});
});
