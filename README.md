[![Maintainability](https://api.codeclimate.com/v1/badges/8b8d7e2467ca7fc16fb8/maintainability)](https://codeclimate.com/github/nofacez/algorithms/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8b8d7e2467ca7fc16fb8/test_coverage)](https://codeclimate.com/github/nofacez/algorithms/test_coverage)

Here I will try to create my own algorithms library which will include algorithms from a book called 'Groking algorithms'. 

It's a study project but i hope it turns into a usefull tool at least for me.

Take care!

### Binary Search

Binary search finds index of the element in a sorted array. If array doesnt include the element, function returns Undefined.

```js
const testArray = [-12, 1, 3, 5, 6, 7, 111];
binarySearch(array, -12) //0
binarySearch(array, 4) //undefined

const testArray2 = ['a', 'ab', 'b', 'c', 'd', 'de', 'e'];
binarySearch(testArray2, 'de') //5
```
###  Breadth-first search

Breadth-first search function takes three arguments: _starting point_, ***graph***, _callback_. It finds the very first element that matches the callback. The graph should take `string` as **key** and `array` as **value**.

eg:
Let's imagine that we are looking for a mango seller. Every mango seller has a name which ends with 'm'.
The _callback_ will look something like this:
```js
   const cb = (name) => name[name.length - 1] === 'm';
```
The _graph_ consinst of a person's name as *key* and the list of person's friends as *value*:
```js
  const graph = new Map();
  graph.set('me', ['Jhon', 'Mary', 'Lina']);
  graph.set('Jhon', ['Kira', 'Mike', 'Danny']);
  graph.set('Danny', ['Thom', 'Laura', 'Michael']);
  graph.set('Lina', []);
  graph.set('Mary', []);
  graph.set('Mike', ['Lina', 'Mary']);
  graph.set('Kira', ['Mike']);
  graph.set('Laura', []);
  graph.set('Michael', ['Kira']);
  graph.set('Thom', []);
```
Function call: 
```js
  breadthFirstSearch('me', graph, cb) // true
```
The function will return `true` and log the name of the seller: `Thom`.