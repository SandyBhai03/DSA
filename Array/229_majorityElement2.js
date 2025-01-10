// Majority Element II (Leetcode prob no 229)

var majorityElement = function (nums) {
  const n = nums.length;
  let candidate1 = null,
    candidate2 = null,
    count1 = 0,
    count2 = 0;

  // First pass: Find potential candidates
  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Second pass: Verify the candidates
  count1 = 0;
  count2 = 0;
  for (const num of nums) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
  }

  const result = [];
  if (count1 > Math.floor(n / 3)) result.push(candidate1);
  if (count2 > Math.floor(n / 3)) result.push(candidate2);

  return result;
};

const nums = [3, 2, 3];

console.log(majorityElement(nums)); // 3

// ~~~~~~~~~~~~~ Solution in Java ~~~~~~~~~~~~~

// class MajorityElementII {
//     public List<Integer> majorityElement(int[] nums) {
//         List<Integer> result = new ArrayList<>();
//         int num1 = 0, num2 = 0;
//         int count1 = 0, count2 = 0;

//         for (int num : nums) {
//             if (num == num1) {
//                 count1++;
//             } else if (num == num2) {
//                 count2++;
//             } else if (count1 == 0) {
//                 num1 = num;
//                 count1 = 1;
//             } else if (count2 == 0) {
//                 num2 = num;
//                 count2 = 1;
//             } else {
//                 count1--;
//                 count2--;
//             }
//         }

//         count1 = 0;
//         count2 = 0;
//         for (int num : nums) {
//             if (num == num1) {
//                 count1++;
//             } else if (num == num2) {
//                 count2++;
//             }
//         }

//         if (count1 > nums.length / 3) {
//             result.add(num1);
//         }
//         if (count2 > nums.length / 3) {
//             result.add(num2);
//         }

//         return result;
//     }

// public static void main(String[] args) {
//     MajorityElementII solution = new MajorityElementII();
//     int[] nums = {3,2,3}; // Example input 
//     List<Integer> result = solution.majorityElement(nums);
//     System.out.println(result); // Output: [3]
// }
// }
