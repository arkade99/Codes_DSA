//Code:6.	What is the difference between process.nextTick() and setImmediate()?
console.log("Start");
x();
setImmediate(() => {
  console.log("SetImmediate callback");
});

process.nextTick(() => {
  console.log("Next Tick callback");
});
async function x() {
  console.log("Inside async function (before await)");
  await null;
  console.log("Inside async function (after await)");
}
setTimeout(() => {
  console.log("setTimeout");
}, 0);

console.log("End");
