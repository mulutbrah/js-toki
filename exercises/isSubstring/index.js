/*
    Assume you have a method isSubstring which checks ifone word is asubstring of another. 
    Given two strings, 51 and 52, write code to check if 52 is a rotation 
    of 51 using only one call to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat")
*/

function isSubstring(string1, string2) {
  /*
  1. Built in Function
    return (
      string1 ===
      string2
        .split("")
        .reverse()
        .join("")
    );

    */
  /*
  2. For Loop
    let reverseStr = ""
  
    for(let i = string2.length - 1; i >= 0; i--) {
        reverseStr += string2[i]
    }
  
    return reverseStr === string1
  */
  /*
    3. Recursion
    if(string2 === ""){
        return ""
    }else{
        return isSubstring(string1, string2.substr(1)) + string2.charAt(0)
    }
 */
}
