const karatsubaMultiplication = require('./KaratsubaMultiplication');

test('Fib function is defined', () => {
  expect(typeof karatsubaMultiplication).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(karatsubaMultiplication(1234, 5678123)).toEqual(7006803782);
});
