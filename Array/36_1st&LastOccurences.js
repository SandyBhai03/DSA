//34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// ~~~~~~~~ Solution Best Approach ~~~~~~~~~~~~

var searchRange = function (nums, target) {
    
 const findPosition = (isFirst) => {
        let left = 0, right = nums.length - 1, result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid; // Potential result found
                if (isFirst) {
                    right = mid - 1; // Move left to find first occurrence
                } else {
                    left = mid + 1; // Move right to find last occurrence
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    };

    const first = findPosition(true);
    if (first === -1) return [-1, -1]; // If target not found
    const last = findPosition(false);
    return [first, last];
};


const nums = [5,7,7,8,8,10], target = 8;

console.log(searchRange(nums ,target))


// ~~~~~~ Second My Jugad Approach ~~~~~~~
// var searchRange = function(nums, target) {
//     const len = nums.length;
//     count = 0;
//     const res = []
//     for(let i = 0; i < len; i++){
//             if(nums[i] === target){
//                 res.push(i)
//             }
           
//     }
//     return res.length === 0 ? [-1, -1] : res.length > 2 ? [res[0], res[res.length-1]] : res.length < 2 ? [res[0], -1] : res;
// };

// const nums = [5,7,7,8,10,8, 9, 7, 8], target = 8;

// console.log(searchRange(nums ,target))