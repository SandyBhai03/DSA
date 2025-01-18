var minSubArrayLen = function(target, nums) {
    // const ans = []
    // count  = 0;
    // for(let i = 0; i < nums.length; i++){
    //    for(let j = 0; j <= i; j++){
    //     ans.push(nums[i])
    //     count++;
    //    }
      
    // }
    // console.log(count)
    // return ans

    for(let st = 0; st < nums.length; st++){
        for(let end = st; end < nums; end++){
            for(let i = st; i <= end; i++){
                console.log(nums[i])
            }
           
        }
       
    }
};

const target = 7, nums = [1,2,3,4,5]

console.log(minSubArrayLen(target, nums))