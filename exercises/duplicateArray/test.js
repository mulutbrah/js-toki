const Node = require("./node");
const duplicatedArray = require("./index");

test("duplicatedArray is a function", () => {
  expect(typeof duplicatedArray).toEqual("function");
});

test("duplicatedArray returns number of nodes at widest point", () => {
  const arr = [10, 3, 3, 1, 2, 3, 3, 3, 4, 4, 5];

  expect(duplicatedArray(arr)).toEqual([1, 2, 3, 4, 5, 10]);
});

test("duplicatedArray returns number of nodes at widest point", () => {
  const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);

  expect(duplicatedArray(root)).toEqual([1, 1, 2, 1]);
});
