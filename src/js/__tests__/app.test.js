import compare from '../app';

const arr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'артиллерист', health: 80 },
];
const sortedArr = arr.sort(compare);

test('check status', () => {
  expect(sortedArr).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'артиллерист', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('check toBe', () => {
  expect(sortedArr).not.toBe([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'артиллерист', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
