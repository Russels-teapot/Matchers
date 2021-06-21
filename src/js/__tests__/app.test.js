import compare from '../app';

test('check status', () => {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'артиллерист', health: 80 },
  ];
  const sortedArr = arr.sort(compare);

  expect(sortedArr).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'артиллерист', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
