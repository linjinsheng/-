var subsets = function(nums) {
    const res = [];
    const backtrack = (path, l, start) => {
        if(path.length === l){
            res.push(path);
            return;
        }

        for(let i = start; i< nums.length; i++){
            backtrack(path.concat(nums[i]), l, i+1);
        }
    };
    for(let i = 0; i <= nums.length; i++){
        backtrack([], i, 0);
    }
    return res;
};
let nums = [1,2,3];
let res = subsets(nums);
console.log('res--', res);