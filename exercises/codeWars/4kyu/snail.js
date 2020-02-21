/*
    array = [[1,2,3],
            [4,5,6],
            [7,8,9]]
    snail(array) #=> [1,2,3,6,9,8,7,4,5]
*/

function index(array) {
  var res = [];

  if (!array.length) return res;
  var next = array.shift();
  if (next) res = res.concat(next);
  for (var i = 0; i < array.length; i++) {
    res.push(array[i].pop());
  }
  next = array.pop();
  if (next) res = res.concat(next.reverse());
  for (var i = array.length - 1; i >= 0; i--) {
    res.push(array[i].shift());
  }

  return res.concat(snail(array));
}
