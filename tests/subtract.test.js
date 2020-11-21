const subtract = require('../src/util/subtract');

test('subtracts two numbers', () => {
    expect(subtract(3, 2)).toBe(1);
});
