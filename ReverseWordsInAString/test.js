const reverseWords = require('./reverseWords');
const inputTests = [
	{input: 'the sky is blue', expectedResult: 'blue is sky the'},
  {input: 'hello world', expectedResult: 'world hello'}
];
test('reverseString function is defined', () => {
  expect(typeof reverseWords).toEqual('function');
});

test('reverses words', () => {
  expect(Array.isArray(inputTests)).toEqual(true);
	inputTests.forEach((element) => {
	  expect(reverseWords(element.input)).toEqual(element.expectedResult);
	});
});
