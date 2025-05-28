const sum = require('./sum');


test('cuando sumo 2 y 2 debe dar 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('cuando sumo 7 y 6 debe dar 13', () => {
  expect(sum(7, 6)).toBe(13);
});

test('cuando sumo 5 y 0 debe dar 5', () => {
  expect(sum(5, 0)).toBe(5);
});

