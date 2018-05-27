const ReverseString = require('./ReverseString');

test('reverseString function is defined', () => {
  expect(typeof ReverseString.reverseString).toEqual('function');
  expect(typeof ReverseString.reverseString1).toEqual('function');
});

test('reverses string \'abcd\'', () => {
  expect(ReverseString.reverseString('abcd')).toEqual('dcba');
  expect(ReverseString.reverseString1('abcd')).toEqual('dcba');
});

test('reverses string \'  abcd\'', () => {
  expect(ReverseString.reverseString('  abcd')).toEqual('dcba  ');
  expect(ReverseString.reverseString1('  abcd')).toEqual('dcba  ');
});

test('reverses string \'123  abcd\'', () => {
  expect(ReverseString.reverseString('123  abcd')).toEqual('dcba  321');
  expect(ReverseString.reverseString1('123  abcd')).toEqual('dcba  321');
});