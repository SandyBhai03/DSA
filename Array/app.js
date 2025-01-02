//Q- 1.  Find the Maximum And Minimum value of an Array
// const arr = [-1, -2, -3, -9, -5]

// const len = arr.length
// let Max = arr[0]
// let Min = arr[0]

// function findMaxMin(arr){
//     for(let i = 1; i < len; i++ ){
//         if(Max < arr[i] ){
//             Max = arr[i]
//         }
//         if(Min > arr[i]){
//             Min = arr[i]
//         }
//     }
//     // console.log("Max value: ", Max, " Min value: ", Min)
//     return `MaxValue: ${Max} and MinValue: ${Min}`
// }

// const ans = findMaxMin(arr)
// console.log(ans)

// -----------------------------------
//Q-2. concatenation-of-array (1929)
// var getConcatenation = function(nums){
//     const ans = []
//     const len = nums.length
//     for(let i = 0; i < len; i++){
//         ans[i] = nums[i]
//         ans[i+len] = nums[i]
//     }
//     return ans
// }

// const arr  = [1, 2, 3 ]
// console.log(getConcatenation(arr))

// -----------------------------------
// Q-3. Two Sum (leetcode problem no-1)

// function twoSum(arr, target){
//     const map = new Map(); // To store the number and its index
//     const len = arr.length;
//     for(let i = 0; i < len; i++){
//         const complement = target - arr[i];
//         if(map.has(complement)){
//             return [map.get(complement), i];
//         }

//         map.set(arr[i], i);
//     }
//     return [];
// }

// console.log(twoSum([2,6,11,15, 7], 9))

// Optimized Solution 👆 TC = O(n) & SC = O(n)

// function twoSum(nums, target) {
//     // Step 1: Pair values with indices in the array itself
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = [nums[i], i]; // Convert each element into a tuple [value, index]
//     }

//     // Step 2: Sort the array in-place by the value (nums[i][0])
//     nums.sort((a, b) => a[0] - b[0]);

//     // Step 3: Two-pointer technique to find the two numbers
//     let left = 0, right = nums.length - 1;

//     while (left < right) {
//         const sum = nums[left][0] + nums[right][0];

//         if (sum === target) {
//             // Return the original indices
//             return [nums[left][1], nums[right][1]];
//         } else if (sum < target) {
//             left++; // Move left pointer to increase the sum
//         } else {
//             right--; // Move right pointer to decrease the sum
//         }
//     }

//     // If no solution is found (problem guarantees a solution, so this won't happen)
//     return [];
// }

// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1]

// ## Another Solution without Using Map (Extra Space), TC = O(nlogn) & SC = O(1)
// function twoSum(nums, target) {
//     // Create an array of indices and values
//     const indexedNums = nums.map((value, index) => [index, value]);

//     // Sort the array by the values
//     indexedNums.sort((a, b) => a[1] - b[1]);

//     // Two-pointer approach
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         const sum = indexedNums[left][1] + indexedNums[right][1];

//         if (sum === target) {
//             // Return the original indices
//             return [indexedNums[left][0], indexedNums[right][0]];
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     // If no solution is found
//     return [];
// }

// // Example usage
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1]


// -----------------------------------
// Q-4. Running sum of 1D Array

// function runningSum(nums){ // O(n)
//     const sum = new Array(nums.length);
//     sum[0] = nums[0];
//     const len = nums.length;
//     for(let i=1; i<len; i++){
//         sum[i] = sum[i-1] + nums[i]
//     }
//     return sum
// }
// const arr = [1,2,3,4, 5]
// console.log(runningSum(arr))

// function calRunSum(arr) { // O(n2)
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j <= i; j++) {
//       sum = sum + arr[j];
//     }
//     output.push(sum);
//   }
//   return output;
// }

// const arr = [1, 2, 3, 4];
// console.log(calRunSum(arr));

// ----------------------------------------------------------------------
// Q-5. Kids with the greatest numbers of candies Leetcode Prob no-(1431)

// var kidsWithCandies = function(candies, extraCandies) {
//     const max = candies.reduce((a,b) => Math.max(a,b), -Infinity); // find Max value
//     //This Solution👇 time and Space = O(n) & O(1)
//     for (let i = 0; i < candies.length; i++) {
//         // Modify the candies array in place to store boolean values
//         candies[i] = candies[i] + extraCandies >= max;
//     }
//     return candies; // The original array now holds the boolean results

//    // This Solution👇 time and Space = O(n) & O(n)
//     // const output = []; //Initialize an empty array for results
//     // for (const candy of candies){
//     //     if( candy + extraCandies >= max ){
//     //         output.push(true) // add true if condition is true
//     //     }
//     //     else{
//     //         output.push(false) // add false if condition is false
//     //     }
//     // }
//     // return output;
// };

// const candies = [2,3,5,1,3]
// const extraCandies = 3;

// const ans = kidsWithCandies(candies, extraCandies)
// console.log(ans)

// --#---------$----------#---------$----------#---------$-------#--
// Q-6. Count Number of Pairs with Absolute Difference K(Leetcode Problem no- 2006)

// var countKDifference = function(nums, k) {
//   const freqMap = {}
//   let count = 0;
// //   const len = nums.length;
//   for(let num of nums){
//     if(freqMap[num - k] != undefined){
//         count += freqMap[num - k];
//     }
//     if(freqMap[num + k] != undefined){
//         count += freqMap[num + k]
//     }
//     freqMap[num] = (freqMap[num] || 0) + 1;
//   }
//   return count
// //   for(let i=0; i<len; i++){
// //     for(let j=1; j<len; j++){
// //         if(nums[i] - nums[j] == k){
// //             // output.push(nums[i], nums[j])
// //             count++;
// //         }
// //         if(nums[j] - nums[i] == -k){
// //             count++;
// //         }
// //     }
// //   }
// //   return count;
// };
// const nums = [1,2,2,1]
// const k = 1;

// const ans = countKDifference(nums, k);
// console.log(ans) // output = 4;

// --#---------$----------#---------$----------#---------$-------#--

//Q-7.  Find common element b/w two array (Leetcode 2956)
// # Solution #
// Time Complexity - O(n+m) & Space Complexity - O(n+m)

// var findIntersectionValues = function (nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   let count1 = 0,
//     count2 = 0;

//     for(let num of nums1){
//         if(set2.has(num)){
//             count1++;
//         }
//     }

//     for(let num of nums2){
//         if(set1.has(num)){
//             count2++;
//         }
//     }
//     return [count1, count2];
// };

// const nums1 = [4, 3, 2, 3, 1];
// const nums2 = [2, 2, 5, 2, 3, 6];
// const ans = findIntersectionValues(nums1, nums2);
// console.log(ans);

// --#------$------#------$------#------$------#------$-------#-------$-------#--
// Q-8. Number of Good Pairs (Leetcode Problem no- 1512)
// Time Complexity - O(n)
// Space Complexity - O(u) // u is number of unique elements

// # Solution #
// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     let freqMap = new Map();

//     for(let num of nums){
//         if(freqMap.has(num)){
//             count += freqMap.get(num);
//             freqMap.set(num, freqMap.get(num)+1)
//         } else{
//             freqMap.set(num, 1)
//         }
//     }
//     return count;
// }

// const arr = [1,2,3,1,1,3];

// const res = numIdenticalPairs(arr)
// console.log(res)

// --#------$------#------$------#------$------#------$-------#-------$-------#--
// Q.9- Suffle the Array (Leetcode problem no - 1470)
// Time complexity- O(n)
// Space Complexity- O(n)

// var shuffle = function (nums, n) {
//   const newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(nums[i], nums[i + n]);
//   }
//   return newArr;
// };

// const arr = [2, 5, 1, 3, 4, 7],
//   n = 3;

// const ans = shuffle(arr, n);
// console.log(ans);

// ================================================================
// Q.=> Subarray Sum Equals to K (Leetcode Problem no-560) -----

//      ~~~~~~~ Optimized Approach O(n) ~~~~~~~~~
// function checkSubarraySum(nums, k){
//     const len = nums.length;
//     let prefixSum = 0;
//     let count  = 0;
//     let map = new Map();
//     map.set(0, 1); //  Initialize with sum 0 to handle subarrays starting from index 0

//     for(let i = 0; i < len; i++){
//         prefixSum += nums[i];

//         if(map.has(prefixSum - k)){
//             count += map.get(prefixSum - k);
//         }

//         map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
//     }
//     return count; 
// }
// const nums = [1, 2, 3]
// const k = 3;
// console.log(checkSubarraySum(nums, k));

//       ~~~~~~~ Brute Froce Approach O(n) ~~~~~~~
// function checkSubarraySum(nums, k){
//     let len = nums.length;
//     let count = 0;

//     for(let i = 0; i < len; i++){ // O(n2)
//         let sum = 0;
//         for(let j = i; j < len; j++){
//             sum += nums[j];
//             if(sum === k){
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// const nums = [1, 2, 3];
// const k = 3;
// console.log(checkSubarraySum(nums, k));

// =============================================================
//Q.  Find All Duplicates in an Array(Leetcode Problem no- 442)

//     ~~~~~~~ Visited element approach TC & SC = O(n) & O(1) ~~~~~~~
// var findDuplicates = function (nums) { 
//     let duplicates = [];
//    for (let i = 0; i < nums.length; i++) {
//        let index = Math.abs(nums[i]) - 1;
//        if (nums[index] < 0) {
//            duplicates.push(Math.abs(nums[i]));
//        } else {
//            nums[index] = -nums[index];
//        }
//    }
//    return duplicates;
// }
//     ~~~~~~~~ Using Hashmap // TC & SC = O(n) & O(n) ~~~~~~~~~~~
// var findDuplicates = function(nums) { 
//     const map = new Map();
//     const ans = [];
//     const len = nums.length;

//     for(let i = 0; i < len; i++){
//         if(map.has(nums[i])){
//             map.set(nums[i], map.get(nums[i])+1) // increment by 1 if number already exists

//             if(map.get(nums[i]) ==2){
//                 ans.push(nums[i]);
//             }
//         }

//         map.set(nums[i], 1); // if element not exists then initialize with 1

//     }
//     return ans;
// };

// const arr = [4,3,2,7,8,2,3,1]
// console.log(findDuplicates(arr))

// ~~~~~~~~~~~~ Reverse an Array ~~~~~~~~~~~~~~~~~
// Q. Reverse an Array

// function reveseArr(str){
//     const save = str;
//     let j= str.length-1
//     for(let i=0; i<j/2; i++){
//         let temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;
//         j--;
//     }
//      return [str, save]
// }

// // const arr = [1,4,7,8,4,];
// const str = "racecr"
// console.log(reveseArr(str))

//~~~~~~~~~~~~~~~~~~~~~~~~ Find Target Value ~~~~~~~~~~~~~~~~~~~~~
// Q. Find the Target value

// function findTarget(arr, target){

// }

// const arr = [2,5,7,9,14,27]
// const target = 23;
// console.log(findTarget(arr, target))

//~~~~~~~~~~~~~~~~~~~~~~~~ Merge Sorted Array ~~~~~~~~~~~~~~~~~~~~~
// Q. Merge Sorted Array

// function mergeSortedArray(arr1, arr2){
//     let j=arr1.length-1;
//     for( let i=0; i<arr1.length-1; i++){
        
//     }
// }
// const arr1 = [1,3,5,7];
// const arr2 = [2,4,6,8];

// console.log(mergeSortedArray(arr1, arr2))