// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

const increaseContinuousIncreasingNumber = (array) => {
  let currentIncrease = 0;
  let bestIncrease = 0;

  for (let i = 0; i < array.length; i++) {
    if (i === 0 || array[i - 1] >= array[i]) {
      currentIncrease = 1;
    } else {
      currentIncrease++;
    }

    bestIncrease = Math.max(currentIncrease, bestIncrease);
  }

  return bestIncrease;
};
