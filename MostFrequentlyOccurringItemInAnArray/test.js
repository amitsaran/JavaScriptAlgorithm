const mostFrequent = require('./MostFrequent');
const inputTests = [
	{input: [1, 3, 1, 3, 2, 1], expectedResult: 1},
  {input: [3, 3, 1, 3, 2, 1], expectedResult: 3},
  {input: [0, -1, 10, 10, -1, 10, -1, -1, -1, 1], expectedResult: -1},
  {input: [0], expectedResult: 0},
  {input: [], expectedResult: undefined}
];

test('mostFrequent function is defined', () => {
  expect(typeof mostFrequent).toEqual('function');
});

test('test most frequently occurring number is given array', () => {
  expect(Array.isArray(inputTests)).toEqual(true);
	inputTests.forEach((element) => {
		expect(mostFrequent(element.input)).toEqual(element.expectedResult);
	});
});
