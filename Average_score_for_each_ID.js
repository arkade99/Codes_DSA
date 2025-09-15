/*You are given N records.
Each record contains two integers:
The first integer represents an ID.
The second integer represents a score associated with that ID.
Your task is to group scores by their IDs and calculate the average score for each ID (rounded down to the nearest integer if needed).
Finally, print the result as an object (or dictionary) where:
The keys are the unique IDs.
The values are the average scores for that ID.
Sample Input 
8
100 80
100 82
101 95
102 90
101 90
101 93
100 90
102 92


O/p->  { '100': 85, '101': 93, '102': 91 }
*/

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

function main(n, arr) {
  let uniq = {};
  arr.forEach(([a, b]) => {
    if (!uniq[a]) uniq[a] = [0, 0];
    uniq[a][0] += b;
    uniq[a][1] += 1;
  });
  console.log(uniq);
  for (let i in uniq) {
    uniq[i] = (uniq[i][0] / uniq[i][1]) | 1;
  }
  console.log(uniq);
}
