Here I will try to create my own algorithms library which will include algorithms from a book called 'Groking algorithms'. 

It's a study project but i hope it turns into a usefull tool at least for me.

Take care!

Binary search finds index of the element in a sorted array. If array doesnt include the element, function returns Undefined.

```js
const testArray = [-12, 1, 3, 5, 6, 7, 111];
binarySearch(array, -12) //0
binarySearch(array, 4) //undefined

const testArray2 = ['a', 'ab', 'b', 'c', 'd', 'de', 'e'];
binarySearch(testArray2, 'de') //5
```
