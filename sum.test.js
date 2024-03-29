const sum = require('./sum');

const shoopingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk'
];


test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('two plus to is four', () => {
    expect(2 + 2).toBe(4)
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

test('adding positive number is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
          expect(a + b).not.toBe(0);
        }
      }
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
     // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
}) 

test('adding floating to point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
}) 

test('there is no I in the Team', () => {
    expect('Team').not.toMatch(/I/);
})

test('but there is a "Stop" in Christoph', () => {
    expect('Christoph').not.toMatch(/Stop/);
})

test('the shooping list has milk on it', () => {
    expect(shoopingList).toContain('milk');
    expect(new Set(shoopingList)).toContain('milk');
});
