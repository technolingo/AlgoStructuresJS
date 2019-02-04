const midpoint = require('./index');
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

test('Midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns null when the list is empty', () => {
  test('return null when the list is empy', () => {
    const l = new LinkedList();
    expect(midpoint(l)).toEqual(null);
  });
});

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has 1 element', () => {
    const l = new LinkedList();
    l.insertLast('a');
    expect(midpoint(l).data).toEqual('a');
  });

  test('when the list has 3 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    expect(midpoint(l).data).toEqual('b');
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
    expect(midpoint(l).data).toEqual('c');
  });

  test('when the list has 9 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
    l.insertLast('f');
    l.insertLast('g');
    l.insertLast('h');
    l.insertLast('i');
    expect(midpoint(l).data).toEqual('e');
  });
});

describe('Midpoint returns the middle node of an even numbered list', () => {
  test('when the list has 2 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    expect(midpoint(l).data).toEqual('a');
  });

  test('when the list has 4 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    expect(midpoint(l).data).toEqual('b');
  });

  test('when the list has 8 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
    l.insertLast('f');
    l.insertLast('g');
    l.insertLast('h');
    expect(midpoint(l).data).toEqual('d');
  });
});
