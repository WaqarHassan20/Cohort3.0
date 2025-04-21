function maketimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function solve() {
  await maketimeoutPromisified(2000);
  console.log("After 2 seconds printed");
  await maketimeoutPromisified(3000);
  console.log("After 3 seconds printed");
  await maketimeoutPromisified(4000);
  console.log("After 4 seconds printed");
}
solve();
