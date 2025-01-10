// Q. Count Number of Pairs with Absolute Difference K(Leetcode Problem no- 2006)

var countKDifference = function(nums, k) {
  const freqMap = {}
  let count = 0;
  for(let num of nums){
    if(freqMap[num - k] != undefined){
        count += freqMap[num - k];
    }
    if(freqMap[num + k] != undefined){
        count += freqMap[num + k]
    }
    freqMap[num] = (freqMap[num] || 0) + 1;
  }
  return count
};

const nums = [1,2,2,1]
const k = 1;

const ans = countKDifference(nums, k);
console.log(ans) // output = 4;

// ~~~~~~~~~~~~ Another way to Solve ~~~~~~~~~~~~~

// var countKDifference = function (nums, k) {
//   let count = 0;
//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 1; j < len; j++) {
//       if (nums[i] - nums[j] == k) {
//         // output.push(nums[i], nums[j]) // another array created for output answer
//         count++;
//       }
//       if (nums[j] - nums[i] == -k) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// const nums = [1,2,2,1]
// const k = 1;
// const ans = countKDifference(nums, k);
// console.log(ans) // output = 4;