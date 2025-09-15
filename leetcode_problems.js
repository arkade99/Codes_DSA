//Check a number is palindrom or not
var isPalindrome = function (x) {
  let p = x.toString().split("");
  //let r= parseInt(p.reverse().join(''))
  let n = p.length;
  //console.log(x)
  for (let i = 0; i < n - 1; i++) {
    if (p[i] !== p[n - 1 - i]) {
      //console.log(false)
      return false;
    }
  }
  return true;
};

var isPalindrome = function (x) {
  let p = x.toString().split("");
  let r = parseInt(p.reverse().join(""));
  return x === r;
};

/* Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].*/
//o(n2)
var twoSum = function (nums, target) {
  const n = nums.length;
  const a = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      //console.log(nums[i],nums[j])
      if (nums[i] + nums[j] === target) {
        a.push(i, j);
        return a;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// o(log n)
var twoSum = function (nums, target) {
  const n = nums.length;
  const a = {};
  for (let i = 0; i < n; i++) {
    let x = target - nums[i];
    if (a[x] !== undefined) {
      return [a[x], i];
    }
    a[nums[i]] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
