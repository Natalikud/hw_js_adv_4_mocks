import fetchData from '../http';

test('fetchData error', () => {
  expect(() => { fetchData(); }).toThrow(new Error('Mock this!'));
});
