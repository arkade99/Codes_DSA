//Validate Palindrome
function validatePalindrome(str) {
  if (!/^[0-9]+$/.test(str)) {
    str = str.replace(/[^A-Za-z]/g, "").toLowerCase();
    console.log(str);
    let a = "";
    for (let i = str.length - 1; i >= 0; i--) {
      a += str[i];
    }
    return a === str;
  }
  return false;
  //console.log(/^[0-9]+$/.test(str))
}

//For the purpose of user debugging.
console.log(validatePalindrome("12345"));
console.log(validatePalindrome("Cat the @ chase abc"));

module.exports = validatePalindrome;
//findMaxNumber
function findMaxNumber(arr) {
  if (arr.length !== 0) {
    let max = arr[0];
    for (let i of arr) {
      if (i > max) max = i;
    }
    return max;
  }
  return null;
}

//For the purpose of user debugging.
console.log(findMaxNumber([56, 21, 88]));

//decodeSecretCode
function decodeSecretCode(s) {
  if (!s || s.length === 0 || s.length % 2 !== 0) return ""; // check invalid input
  s = s.split("");
  let res = "";
  for (let i = 0; i < s.length; i = i + 2) {
    const a = +s[i + 1];
    const b = s[i].charCodeAt(0) + a; //get ascii
    res += String.fromCharCode(b); // get charecter from ascii
  }
  return res;
}
console.log(decodeSecretCode("a2b2")); // O/P=> cd [a ascii 97 now add next number (97+2=99) 99 is ascii for c, b ascii 98 now 98+2 = 100 is ascii for d]
console.log(decodeSecretCode("a2b")); // O/P=> ""
console.log(decodeSecretCode()); // O/P=> ""
console.log(decodeSecretCode("x2y2z2")); // O/P=> z{|
module.exports = { decodeSecretCode };

//https://namastedev.com/practice/first-missing-positive
function firstMissingPositive(nums) {
  // Your code here
  if (!nums || nums.length === 0) return 1;
  let max = nums[0];
  for (let i of nums) {
    if (max < i) {
      max = i;
    }
  }
  if (max < 1) return 1;
  for (let i = 1; i < nums.length + 1; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return max + 1;
}

module.exports = { firstMissingPositive };

function firstMissingPositive(nums) {
  if (!nums || nums.length === 0) return 1;
  //short array from low to high in js and remove -ve
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
}
console.log(firstMissingPositive([1, 4, 2, 3]));

//Find missing number [3, 0, 1]->2
function findMissingNumber(nums) {
  // Your implementation
  nums.sort();
  //console.log(nums)
  const n = nums.length;
  //if (nums[0] !==0) return 0
  for (let i = 0; i < n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return n;
}
findMissingNumber([3, 0, 1]);

module.exports = findMissingNumber;

function findMissingNumber(nums) {
  // Your implementation
  const set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i)) return i;
  }
  return nums.length;
}

//For the purpose of user debugging.
console.log(findMissingNumber([0, 1, 1, 0]));

function reverseWords(sentence) {
  const a = sentence.split(/(\s+)/);
  let b = [];
  for (let i of a) {
    b.push(i.split("").reverse().join(""));
  }
  return b.join("");
}

//For the purpose of user debugging.
reverseWords("  Hello World "); //  olleH dlroW

module.exports = reverseWords;

function chunkArray(arr, n) {
  let a = [];
  let b = [];
  let cur = 0;
  let x = arr.length;
  for (let i = 0; i < x; i++) {
    if (cur <= n) {
      a.push(arr[i]);
      cur += 1;
    }
    if (cur === n || i === x - 1) {
      b.push(a);
      cur = 0;
      a = [];
    }
  }
  return b;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
module.exports = chunkArray;
