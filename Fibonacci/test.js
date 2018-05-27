const Fibonacci = require('./Fibonacci');

test('Fib function is defined', () => {
  expect(typeof Fibonacci.fib).toEqual('function');
  expect(typeof Fibonacci.fibR).toEqual('function');
  expect(typeof Fibonacci.fibRT).toEqual('function');
  expect(typeof Fibonacci.fibRDP).toEqual('function');
  expect(typeof Fibonacci.fibDPBU).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(Fibonacci.fib(1)).toEqual(1);
  expect(Fibonacci.fibR(1)).toEqual(1);
  expect(Fibonacci.fibRT(1)).toEqual(1);
  expect(Fibonacci.fibRDP(1)).toEqual(1);
  expect(Fibonacci.fibDPBU(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(Fibonacci.fib(2)).toEqual(1);
  expect(Fibonacci.fibR(2)).toEqual(1);
  expect(Fibonacci.fibRT(2)).toEqual(1);
  expect(Fibonacci.fibRDP(2)).toEqual(1);
  expect(Fibonacci.fibDPBU(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(Fibonacci.fib(3)).toEqual(2);
  expect(Fibonacci.fibR(3)).toEqual(2);
  expect(Fibonacci.fibRT(3)).toEqual(2);
  expect(Fibonacci.fibRDP(3)).toEqual(2);
  expect(Fibonacci.fibDPBU(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(Fibonacci.fib(4)).toEqual(3);
  expect(Fibonacci.fibR(4)).toEqual(3);
  expect(Fibonacci.fibRT(4)).toEqual(3);
  expect(Fibonacci.fibRDP(4)).toEqual(3);
  expect(Fibonacci.fibDPBU(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(Fibonacci.fib(39)).toEqual(63245986);
  expect(Fibonacci.fibR(39)).toEqual(63245986);
  expect(Fibonacci.fibRT(39)).toEqual(63245986);
  expect(Fibonacci.fibRDP(39)).toEqual(63245986);
  expect(Fibonacci.fibDPBU(39)).toEqual(63245986);
});
