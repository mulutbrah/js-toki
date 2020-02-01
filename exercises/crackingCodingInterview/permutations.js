/*

In this kata you have to create all permutations of an input string and remove duplicates, if present.
This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


*/

function permutations(string) {
  let res = [];
  string = string.split("").sort();
  let used = [];
  for (let i = 0; i < string.length; i++) used.push(false);
  function dfs(s, path) {
    if (path.length == s.length) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (!used[i - 1] && s[i] == s[i - 1]) continue;
      if (!used[i]) {
        used[i] = true;
        path.push(s[i]);
        dfs(s, path);
        path.pop();
        used[i] = false;
      }
    }
  }
  dfs(string, []);
  return res;
}
