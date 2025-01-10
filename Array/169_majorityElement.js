const mejorityElement = (nums) => {
  const n = nums.length;
//   let count = 0;
//   let curr = null;

//   for (let i = 0; i < n; i++) {
//     if (count === 0){
//         curr = nums[i];
//     }
//     if (curr === nums[i]) {
//       count++;
//     } else {
//       count--;
//     }
//   }

//   return curr;

    let candidate = null;
    let count = 0;

    for (const num of nums) {
      if (count === 0) {
        candidate = num;
      }
      count += num === candidate ? 1 : -1;
    }

   // Check if the candidate is actually the majority element
   count = 0;
   for (let num of nums) {
       if (num == candidate) {
           count++;
       }
   }

   if (count > nums.length / 2) {
       return candidate;
   } else {
       return -1; // Or any other value to indicate no majority element
   }
};

const nums =  [2,2,1,1,2,1,2,2,3,3]

console.log(mejorityElement(nums)); 
