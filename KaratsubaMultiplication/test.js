const karatsubaMultiplication = require('./KaratsubaMultiplication');

test('karatsubaMultiplication function is defined', () => {
  expect(typeof karatsubaMultiplication).toEqual('function');
});

test('calculate multiplication of 1234 and 5678123', () => {
  expect(karatsubaMultiplication(1234, 5678123)).toEqual(7006803782);
});
