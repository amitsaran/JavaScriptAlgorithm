const twoSum = require('./FindSumTwoNumbers');
const inputTests = [
  {
    input: {
      iArray: [2,7,11, -1, 15, 15], 
      target: 10
    }, 
    expectedResult: [2, 3]
  },
  {
    input: {
      iArray: [2,7,11, -1, 15, 15], 
      target: 9
    }, 
    expectedResult: [0, 1]
  },
  {
    input: {
      iArray: [2,7,11, -1, 15, 15], 
      target: 9
    }, 
    expectedResult: [0, 1]}
];

test('twoSum function is defined', () => {
  expect(typeof twoSum).toEqual('function');
});

test('test sum of two numbers in an unsorted array is the input target', () => {
  expect(Array.isArray(inputTests)).toEqual(true);
	inputTests.forEach((element) => {
		expect(twoSum(element.input.iArray, element.input.target).toString).toEqual(element.expectedResult.toString);
	});
});
