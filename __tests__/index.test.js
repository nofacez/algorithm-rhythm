/* eslint-disable no-undef */
import binarySearch from '../src/binarySearch';

test('binary search', () => {
  const testArray = [-12, 1, 3, 5, 6, 7, 111];
  const testArray2 = ['apple', 'aboba', 'book', 'club', 'dunk', 'deep', 'eqaul'];
  expect(binarySearch(testArray, 3)).toEqual(2);
  expect(binarySearch(testArray2, 'deep')).toEqual(5);
  expect(binarySearch(testArray2, 'de')).toEqual(undefined);
});
