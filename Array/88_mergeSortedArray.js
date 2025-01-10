var mergeSortedArray = function (nums1, m, nums2, n) {

    let i = 0; j = 0;
    const temp = [];

    while( i < m && j < n){
        if(nums1[i] <= nums2[j]){
              temp.push(nums1[i++]);
        } else{
            temp.push(nums2[j++])
        }
    }
    while( i < m){
        temp.push(nums1[i++])
    }
    while( j < n){
        temp.push(nums2[j++]);
    }

    for(let k = 0; k < temp.length; k++){
        nums1[k] = temp[k];
    }
    // ~~~~~~~~~ Another Approach to Solve ~~~~~~~~~~
    // let i = m - 1; // Pointer for nums1
    // let j = n - 1; // Pointer for nums2
    // let k = m + n - 1; // Pointer for the end of nums1
    //     if (nums1[i] > nums2[j]) {
    //         nums1[k--] = nums1[i--];
    //     } else {
    //         nums1[k--] = nums2[j--];
    //     }
    // }

    // # // Copy remaining elements from nums2 (if any)
    // while (j >= 0) {
    //     nums1[k--] = nums2[j--];
    // }
    return nums1
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

console.log(mergeSortedArray(nums1, n, nums2, m))