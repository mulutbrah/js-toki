/*
    There are three types of edits that can be performed on strings: insert a character, remove a character, 
    or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

function oneAway(string1, string2) {
  if (Math.abs(string1.length - string2.length) >= 2) return false;

  const str1 = string1.split("");
  const str2 = string2.split("");
  let diff = 0;

  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      diff++;
    }
  }

  return diff >= 2;
}

console.log(oneAway("palessss", "ple"));
console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "pale"));
console.log(oneAway("pale", "bake"));
