/* eslint-disable no-undef */
import { binarySearch } from "../src/binarySearch";
import { breadthFirstSearch } from "../src/breadthFirstSearch";

test("binary search", () => {
  const testArray = [-12, 1, 3, 5, 6, 7, 111];
  const testArray2 = [
    "apple",
    "aboba",
    "book",
    "club",
    "dunk",
    "deep",
    "eqaul",
  ];
  expect(binarySearch(testArray, 3)).toEqual(2);
  expect(binarySearch(testArray2, "deep")).toEqual(5);
  expect(binarySearch(testArray2, "de")).toEqual(undefined);
});

test("width search", () => {
  const cb = (name) => name[name.length - 1] === "m";
  const testGraph = new Map();
  testGraph.set("me", ["Jhon", "Mary", "Lina"]);
  testGraph.set("Jhon", ["Kira", "Mike", "Danny"]);
  testGraph.set("Danny", ["Thom", "Laura", "Michael"]);
  testGraph.set("Lina", []);
  testGraph.set("Mary", []);
  testGraph.set("Mike", ["Lina", "Mary"]);
  testGraph.set("Kira", ["Mike"]);
  testGraph.set("Laura", []);
  testGraph.set("Michael", ["Kira"]);
  testGraph.set("Thom", []);

  const testGraph2 = new Map();
  testGraph2.set("me", ["Jhon", "Lary", "Dina"]);
  testGraph2.set("Jhon", ["Kira", "Sike", "Lanny"]);
  testGraph2.set("Dina", []);
  testGraph2.set("Lary", []);
  testGraph2.set("Lanny", []);
  testGraph2.set("Sike", ["Dina", "Lary"]);
  testGraph2.set("Kira", ["Sike"]);

  const testGraph3 = new Map([]);

  expect(breadthFirstSearch("me", testGraph, cb)).toEqual(true);
  expect(breadthFirstSearch("me", testGraph2, cb)).toEqual(false);
  expect(breadthFirstSearch("me", testGraph3, cb)).toEqual(false);
});
