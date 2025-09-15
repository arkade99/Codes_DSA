// arr-> Input Arr [[ 100, 80 ],[ 100, 82 ],[ 101, 95 ],[ 102, 90 ],[ 101, 90 ],[ 101, 93 ],[ 100, 90 ],[ 102, 92 ]]
process.stdin.resume();
process.stdin.setEncoding("utf8");

let input = "";
process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  input = input.trim().split("\n"); // split lines

  let N = parseInt(input[0]); // first line integer
  let arr = [];

  for (let i = 1; i <= N; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    arr.push([a, b]);
  }

  //console.log(arr); // output your result
  main(N, arr);
});

// 121
// 1
process.stdin.resume();
process.stdin.setEncoding("utf8");

let input = "";
process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  input = input.trim().split("\n"); // split lines

  let n = parseInt(input[0]); // first line integer
  let k = parseInt(input[1]);

  console.log(n, k); // 121 1
  main(n);
});
