const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('two plus to is four', () => {
    expect(2 + 2).toBe(4)
});