const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;
    do {
      let mid = (low + high) / 2;
      const guess = arr[mid];
      if (guess === item) return mid;
      if (guess > item) {
        high = mid - 1;
      } else {
        low = mid + 1;
      } 
    } while (low <= high);
    return undefined;
};

const testArray = [-12, 1, 3, 5, 6, 7, 111]
const testArray2 = ['a', 'ab', 'b', 'c', 'd', 'de', 'e']
console.log(binarySearch(testArray2, 'de'))

export default binarySearch;