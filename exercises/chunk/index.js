// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []
  let temp = []

  for(let value of array) {
    // #1
    const last = chunked[chunked.length - 1];

    if(!last || last.length === size) {
      chunked.push([value])
    }else{
      last.push(value)
    }

    //#2
    // if(temp.lengthsize!==size) {
    //   temp.push(value)
    //   if(value === array[array.length-1]) {
    //     console.log('>>>>>', value);
    //     chunked.push(temp)
    //     temp = []
    //   }
    // }else{
    //   temp.push(value)
    //   chunked.push(temp);
    //   temp=[]
    // }

    // #3
    // const chunked = [];
    // let index = 0;

    // while (index < array.length) {
    //   chunked.push(array.slice(index, index + size));
    //   index += size;
    // }
  }

  return chunked;
}

module.exports = chunk;
