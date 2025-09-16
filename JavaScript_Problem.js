//Find the maximum & minimum number from array.
function SolutionOne(a) {
  let max = -Infinity;
  let min = Infinity;
  for (i of a) {
    if (i > max) {
      max = i;
    }
    if (i < min) {
      min = i;
    }
  }
  console.log(max, min);
}
SolutionOne([12, 90, 45, 2, 64, 999, 11, 1]);

//5.	Reverse a given string
function SolutionOne(a) {
  const x = a.split("").reverse().join("");
  return x;
}
console.log(SolutionOne("Arka"));

//5.	Reverse a given string
function SolutionOne(a) {
  let x = "";
  for (let i = a.length - 1; i >= 0; i--) {
    x += a[i];
  }
  return x;
}
console.log(SolutionOne("Arka"));

//5.	Reverse a given string with togglecase i/p-> Arka o/p-> AKRa
function SolutionOne(a) {
  let x = "";
  for (let i = a.length - 1; i >= 0; i--) {
    a[i] === a[i].toUpperCase()
      ? (x += a[i].toLowerCase())
      : (x += a[i].toUpperCase());
  }
  return x;
}
console.log(SolutionOne("Arka"));

//5.	Reverse a given string with + toggle case at specific positions i/p-> ABcdeF o/p-> FEdcbA
function SolutionOne(a) {
  let x = "";
  let y = [];
  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] === a[i].toUpperCase()) {
      y.push(i);
    }
  }
  for (let i = a.length - 1; i >= 0; i--) {
    x += a[i].toLowerCase();
  }

  for (i of y) {
    x = x.substring(0, i) + x[i].toUpperCase() + x.substring(i + 1);
  }

  return x;
}
console.log(SolutionOne("ABcdeF")); //FEdcbA

// Check palindrome
function SolutionOne(a) {
  a = a.toLowerCase();
  let b = "";
  for (let i = a.length - 1; i >= 0; i--) {
    b += a[i];
  }
  console.log(b);
  return a === b;
}
console.log(SolutionOne("cAt"));

// Count vowel
function SolutionOne(a) {
  let count = 0;
  for (i of a) {
    if ("aeiouAEIOU".includes(i)) {
      count += 1;
    }
  }
  return count;
}
console.log(SolutionOne("cAtAoME"));

// Remove Duplicate
function SolutionOne(a) {
  //a=a.toLowerCase()
  let b = "";
  for (i of a) {
    if (!b.includes(i)) {
      b += i;
    }
  }
  return b;
}
console.log(SolutionOne("cAtAoMEoOa"));

// Remove Duplicate
function SolutionOne(a) {
  //a=a.toLowerCase()
  let b = [];
  for (i of a) {
    if (!b.includes(i)) {
      b.push(i);
    }
  }
  return b;
}
console.log(SolutionOne([1, 6, 8, 1, 5, 2, 8, 1]));

// Count of Distrinct Vowel A/a count =1
function SolutionOne(a) {
  let b = "";
  let c = 0;
  a = a.toLowerCase();
  for (i of a) {
    if ("aeiou".includes(i)) {
      if (!b.includes(i)) {
        c += 1;
        b += i;
      }
    }
  }
  return b, c;
}
console.log(SolutionOne("cAtAoMEoOaiU"));

//, Fibonacci series upto a
function SolutionOne(a) {
  let x = 0;
  let y = 1;
  for (let i = 1; i < a; i++) {
    const temp = x + y;
    console.log(x);
    x = y;
    y = temp;

    if (x > a) {
      break;
    }
  }
}
SolutionOne(10);

//, Factorial
function SolutionOne(a) {
  let fact = 1;
  for (let i = 2; i <= a; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
SolutionOne(5);

// Longest word in sentence
function SolutionOne(a) {
  const x = a.split(" ");
  let max = "";
  let len = 0;
  for (i of x) {
    if (i.length > len) {
      len = i.length;
      max = i;
    }
  }
  console.log(len, max);
}
SolutionOne("Longest word in sentence");

//Validate charecter with reverse
function validatePalindrome(str) {
  let a = "";
  let b = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //a+=str[i]
    if (/^[A-Za-z]+/.test(str[i])) {
      a += str[i];
    }
  }
  return a;
}

//For the purpose of user debugging.
console.log(validatePalindrome("12345"));
console.log(validatePalindrome("Cat the @ chase abcA 123X"));

module.exports = validatePalindrome;

//Sort array based on 1st digit
function formLargestNumber(arr) {
  //write your implementation here
  arr.sort((a, b) => {
    return firstDigit(b) - firstDigit(a);
  });
  console.log(arr);
  return arr.join("");
}

function firstDigit(num) {
  while (num > 10) {
    num = Math.floor(num / 10);
  }
  return num;
}
const input = [3, 40, 14, 5, 9]; //->[9,5,40,3,24]
console.log(formLargestNumber(input));
module.exports = formLargestNumber;
