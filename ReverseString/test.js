const reverseString = require('./ReverseString');

test('reverseString function is defined', () => {
  expect(typeof reverseString).toEqual('function');
});

test('reverses string \'abcd\'', () => {
  expect(reverseString('abcd')).toEqual('dcba');
});

test('reverses string \'  abcd\'', () => {
  expect(reverseString('  abcd')).toEqual('dcba  ');
});

test('reverses string \'123  abcd\'', () => {
  expect(reverseString('123  abcd')).toEqual('dcba  321');
});