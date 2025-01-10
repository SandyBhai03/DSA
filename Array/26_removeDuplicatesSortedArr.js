// Leetcode problem no 26 
var removeDuplicates = function (nums) {
//   const len = nums.length;
//   if (nums.length === 0) return 0;

//   let j = 0; // Points to the last unique element
//   for (let i = 1; i < len; i++) {
//     if (nums[i] !== nums[j]) {
//       // Found a new unique element
//       j++; // Move the unique pointer
//       nums[j] = nums[i]; // Update the position
//     }
//   }
//   return j + 1; // Length of unique array

  //~~~~ Another way to Solve ~~~~~
  count = 0;
  const len = nums.length;
  for(let i = 0; i < len; i++){
      if(i < len-1 && nums[i] == nums[i+1]){
          continue;
      } else{
          nums[count] = nums[i];
          count++;
      }
  }
  return count;
};

const nums = [ 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
