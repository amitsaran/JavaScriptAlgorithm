const DataStructureFactory = require('./DataStructureFactory');

test('DataStructureFactory functions defined', () => {
  expect(typeof DataStructureFactory.createStack).toEqual('function');
  expect(typeof DataStructureFactory.createQueue).toEqual('function');
});

test('Test Queue functions', () => {
	var q1 = DataStructureFactory.createQueue();
	
	expect(q1).not.toBe(null);
	
	expect(typeof q1.size).toEqual('function');
	expect(typeof q1.isEmpty).toEqual('function');
	expect(typeof q1.front).toEqual('function');
	expect(typeof q1.back).toEqual('function');
	expect(typeof q1.dequeue).toEqual('function');
	expect(typeof q1.enqueue).toEqual('function');
	
	expect(q1.size()).toEqual(0);
	
	q1.enqueue(1);
	expect(q1.size()).toEqual(1);
	expect(q1.front()).toEqual(1);
	expect(q1.back()).toEqual(1);
	
	q1.enqueue(2);
	expect(q1.size()).toEqual(2);
	expect(q1.front()).toEqual(1);
	expect(q1.back()).toEqual(2);
	
	q1.enqueue(3);
	expect(q1.size()).toEqual(3);
	expect(q1.front()).toEqual(1);
	expect(q1.back()).toEqual(3);
	
	q1.enqueue(4);
	expect(q1.size()).toEqual(4);
	
	q1.enqueue(5);
	expect(q1.size()).toEqual(5);
	
	q1.dequeue();
	expect(q1.size()).toEqual(4);
	expect(q1.front()).toEqual(2);
	expect(q1.back()).toEqual(5);
});

test('Test Stack functions', () => {
	var s1 = DataStructureFactory.createStack();
	
	expect(s1).not.toBe(null);
	
	expect(typeof s1.size).toEqual('function');
	expect(typeof s1.isEmpty).toEqual('function');
	expect(typeof s1.top).toEqual('function');
	expect(typeof s1.bottom).toEqual('function');
	expect(typeof s1.push).toEqual('function');
	expect(typeof s1.pop).toEqual('function');
	
	expect(s1.size()).toEqual(0);
	
	s1.push(10);
	expect(s1.size()).toEqual(1);
	expect(s1.bottom()).toEqual(10);
	expect(s1.top()).toEqual(10);
	
	s1.push(20);
	expect(s1.size()).toEqual(2);
	expect(s1.bottom()).toEqual(10);
	expect(s1.top()).toEqual(20);
	
	s1.push(30);
	expect(s1.size()).toEqual(3);
	expect(s1.bottom()).toEqual(10);
	expect(s1.top()).toEqual(30);
	
	s1.push(40);
	expect(s1.size()).toEqual(4);
	
	s1.push(50);
	expect(s1.size()).toEqual(5);
	expect(s1.bottom()).toEqual(10);
	expect(s1.top()).toEqual(50);
	
	s1.pop();
	expect(s1.size()).toEqual(4);
	expect(s1.bottom()).toEqual(10);
	expect(s1.top()).toEqual(40);
});

