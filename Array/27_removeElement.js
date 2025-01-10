var removeElement = function(nums, val) {
    const len = nums.length;
    let count = 0;

    for(let i = 0; i < len; i++){
        if(nums[i] !== val){
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};

const  nums = [3,2,2,3], val = 3;
console.log(removeElement(nums, val))