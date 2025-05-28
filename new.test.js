const sum = require('./sum');


test('cuando sumo 5 y  7 debe dar 12', () => {
  expect(sum(5, 7)).toBe(12);
});