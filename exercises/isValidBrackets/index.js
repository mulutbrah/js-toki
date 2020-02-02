function isValidBracket(string) {
  // const hash = string.split("");
  // let isFind = false;
  // const foundHash = {};

  //   for (let val of string) {
  //     hash[val] = hash[val] + 1 || 1;
  //   }
  //   return hash["]"] === hash["["];

  //2
  //   for (let i = 0; i < hash.length; i++) {
  //     isFind = false;
  //     if (hash[i] === "[" && i + 1 < hash.length) {
  //       for (let j = i + 1; j < hash.length; j++) {
  //         if (hash[j] === "]" && !isFind) {
  //           hash[i] = "";
  //           hash[j] = "";
  //           isFind = true;
  //         }
  //       }
  //     }
  //   }
  //   return hash.join("").length === 0;

  // 3
  // number of ']' and '[' must be same and if ']' found before count start return false
  // let count = 0;

  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] == "[") {
  //     count++;
  //   } else if (string[i] == "]") {
  //     if (count == 0) {
  //       return false;
  //     } else {
  //       count--;
  //     }
  //   }
  // }

  // if (count == 0) {
  //   return true;
  // }

  // return false;

  // 4
  const hash = {};

  for (let val of string) {
    if (val === "]") {
      if (hash["["] !== hash["]"]) {
        hash[val] = hash[val] + 1 || 1;
      } else {
        return false;
      }
    } else if (val === "[") {
      hash[val] = hash[val] + 1 || 1;
    }
  }

  return hash["["] === hash["]"];
}

console.log(isValidBracket("[[[][]][][][]]")); //true
console.log(isValidBracket("[][][]")); //true
console.log(isValidBracket("[][][")); //false
console.log(isValidBracket("[]][")); //false
console.log(isValidBracket("[[][]][]")); //true
