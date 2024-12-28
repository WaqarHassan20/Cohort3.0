function maketimeoutpromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function callabovefunction() {
  await maketimeoutpromisified(3000);
  console.log("hello");
  await maketimeoutpromisified(4000);
  console.log("hi");
  await maketimeoutpromisified(5000);
  console.log("i am here");
}
callabovefunction();

// =========================================
// good example to understand flow of code
// in simple async await and in promises.
// Run these two codes simultaneously;
// one function at one time
// =========================================

// function maincall() {
//   console.log("hello i am here");
// }
// async function callabovefunction(fn) {
//   await setTimeout(fn, 3000);
//   console.log("hello");
//   await setTimeout(fn, 4000);
//   console.log("hi");
//   await setTimeout(fn, 5000);
//   console.log("i am here");
// }
// callabovefunction(maincall);
