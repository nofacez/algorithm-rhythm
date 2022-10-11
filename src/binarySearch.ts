export const binarySearch = <T>(arr: T[], item: T): number | undefined => {
  let low = 0;
  let high = arr.length - 1;
  do {
    const mid = (low + high) / 2;
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
