Here I will try to create my own algorithms library which will include algorithms from a book called 'Groking algorithms'. 

It's a study project but i hope it turns into a usefull tool at least for me.

Take care!

Binary search: работает с отсортированным массивом, находит индекс заданного элемента. Если эллемента в массиве нет - возвращает undefined.

Пример использования:

```js
const testArray = [-12, 1, 3, 5, 6, 7, 111];
binarySearch(array, -12) //0
binarySearch(array, 4) //undefined

const testArray2 = ['a', 'ab', 'b', 'c', 'd', 'de', 'e'];
binarySearch(testArray2, 'de') //5
```

![An algorithm meme](https://lh3.googleusercontent.com/proxy/1A0o_4JbDdfLLfnw07DBxB6nM35JjODlEh53wI-0ygpAjkbZL9GWAc45DzWhYNAN6Sh50z_gF-YFfSmrLHPL7rax3arPuRUo3EoLhJyPyOl4ckyKHZkVTd_nq_7DrqIaYmfWrLq-FT51V50eIcFrdg3bp80jwQvpOv0)