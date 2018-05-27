const Palindrome = require('./Palindrome');

test('Palindrome function is defined', () => {
  expect(typeof Palindrome.isPalindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(Palindrome.isPalindrome('aba')).toBeTruthy();
  expect(Palindrome.isPalindrome1('aba')).toBeTruthy();
  expect(Palindrome.isPalindrome2('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(Palindrome.isPalindrome(' aba')).toBeFalsy();
  expect(Palindrome.isPalindrome1(' aba')).toBeFalsy();
  expect(Palindrome.isPalindrome2(' aba')).toBeFalsy();
  expect(Palindrome.isPalindrome3(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(Palindrome.isPalindrome('aba ')).toBeFalsy();
  expect(Palindrome.isPalindrome1('aba ')).toBeFalsy();
  expect(Palindrome.isPalindrome2('aba ')).toBeFalsy();
  expect(Palindrome.isPalindrome3('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(Palindrome.isPalindrome('greetings')).toBeFalsy();
  expect(Palindrome.isPalindrome1('greetings')).toBeFalsy();
  expect(Palindrome.isPalindrome2('greetings')).toBeFalsy();
  expect(Palindrome.isPalindrome3('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(Palindrome.isPalindrome('1000000001')).toBeTruthy();
  expect(Palindrome.isPalindrome1('1000000001')).toBeTruthy();
  expect(Palindrome.isPalindrome2('1000000001')).toBeTruthy();
  expect(Palindrome.isPalindrome3('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(Palindrome.isPalindrome('Fish hsif')).toBeFalsy();
  expect(Palindrome.isPalindrome1('Fish hsif')).toBeFalsy();
  expect(Palindrome.isPalindrome2('Fish hsif')).toBeFalsy();
  expect(Palindrome.isPalindrome3('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(Palindrome.isPalindrome('pennep')).toBeTruthy();
  expect(Palindrome.isPalindrome1('pennep')).toBeTruthy();
  expect(Palindrome.isPalindrome2('pennep')).toBeTruthy();
  expect(Palindrome.isPalindrome3('pennep')).toBeTruthy();
});
