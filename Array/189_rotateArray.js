var rotateArray = function (nums, k) {

    // const n = nums.length;
    // k = k % n; // Handle cases where k > nums.length
    // const temp = new Array(n);

    // for (let i = 0; i < n; i++) {
    //     temp[(i + k) % n] = nums[i];
    // }

    // for (let i = 0; i < n; i++) {
    //     nums[i] = temp[i];
    // }
    
    // ~~~~~~~~ Another way to Solve ~~~~~~~~~
    const n = nums.length;
    k = k % n; // Handle cases where k > nums.length
    
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    
    reverse(nums, 0, n - 1);      // Step 1: Reverse the whole array
    reverse(nums, 0, k - 1);     // Step 2: Reverse the first k elements
    reverse(nums, k, n - 1);     // Step 3: Reverse the remaining elements

    return nums

//   ~~~~~ Another simple way but But Show TLE(Time Limit Exeed) ~~~~~
    // for(let i=0; i<k; i++){
    //     let val = nums.pop()
    //     nums.unshift(val);
    // }
    //   return nums
};

const  nums = [1,2,3,4,5,6,7], k = 3;
console.log(rotateArray(nums, k))