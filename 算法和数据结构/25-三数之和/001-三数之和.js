var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;

  if(nums == null || len < 3)return ans;
  nums.sort((a, b) => a-b);
  for(let i = 0; i < len; i++){
      if(nums[i]>0)break;
      if(i > 0 && nums[i] == nums[i-1])continue;
      let L = i + 1;
      let R = len - 1;
      while(L < R){
          const sum = nums[i] + nums[L] + nums[R];
          if(sum == 0){
              ans.push([nums[i], nums[L], nums[R]]);
              while(L < R && nums[L] == nums[L+1])L++;
              while(L < R && nums[R] == nums[R-1])R--;
              L++;
              R --;
          }else if(sum < 0){
              L++;
          }else if(sum > 0){
              R--;
          }
      }
  }
  return ans;
};

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));