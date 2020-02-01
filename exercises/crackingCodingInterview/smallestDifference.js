/*
    Given two arrays of integers, compute the pair of values (one value in each array) 
    with the smallest (non-negative) difference. Return the difference. 
*/

function smallestDifference(arrA, arrB) {
  const arr1 = arrA.sort(function(a, b) {
    return a - b;
  });
  const arr2 = arrB.sort(function(a, b) {
    return a - b;
  });

  let smallestHash = { value: 9999 };
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let currentValue = Math.abs(arr1[i] - arr2[j]);

    if (currentValue < smallestHash.value) {
      smallestHash.value = currentValue;
      smallestHash["arr1"] = arr1[i];
      smallestHash["arr2"] = arr2[j];
    }

    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return smallestHash;
}

console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));
