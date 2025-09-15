/*
You are given:
An integer `a` (minimum 3 digits).
An integer `k` (number of operations allowed).
You need to transform `a` into the largest possible palindrome number*by performing at most `k` operations.
An operation is defined as either:
1. Swapping two digits*of the number.
2. Increasing a digit*(you can increase it up to `9`).
Your task is to output the maximum possible palindrome that can be obtained.
If no palindrome can be formed within `k` operations, output `-1`.
 📥 Input Format
First line: integer `a` (minimum 3-digit number).
Second line: integer `k` (number of allowed operations).
 📤 Output Format
Print the maximum palindrome number*possible within `k` operations.
If impossible, print `-1`.

 ✅ Sample Input 1
3943
1
 ✅ Sample Output 1
3993
 ✅ Sample Input 2
12321
2
 ✅ Sample Output 2
92929
 ⚙️ Explanation
In Example 1, only 1 operation is allowed. Changing the second digit `4 → 9` makes `3943 → 3993`, which is the largest palindrome possible.
In Example 2, you can use 2 operations: increase `1 → 9` (both first and last digit), resulting in `92929`, which is the maximum palindrome.
*/
