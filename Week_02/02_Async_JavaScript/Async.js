// // ====================== Synchronous =====================//
const fileSystem = require("fs");

const fileA = fileSystem.readFileSync("a.txt", "utf-8");
console.log(fileA);

const fileB = fileSystem.readFileSync("b.txt", "utf-8");
console.log(fileB);

// ====================== Asynchronous =====================//

const fs = require("fs");
function printData(err, data) {
  // order of err and data is built in , so use it in same given order //
  // if you replace them, they will still give same values but you have to print err to print data
  if (err) {
    console.log("Error is ", err);
  } else {
    console.log("Data is :", data);
  }
}

fs.readFile("a.txt", "utf-8", printData);

fs.readFile("b.txt", "utf-8", printData);

setTimeout(() => {
  console.log("Done for time");
}, 0);

console.log("Hello");

// ====================== SetTimeOut function =====================//

console.log("Hello");

setTimeout(() => {
  console.log("Click the button");
}, 1000);

console.log("Welcome to loupe");

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += 1;
}

console.log("Expensive operation done !");
// An I/O task and constantly running task
// These are two types of tasks in above examples and for the async javascript
// You cannot interrupt constantly running tasks until they are done
// then it will swtich to async await statements

// ====================== Convert timeout function to synchronous =====================//

function setTimeOutSync(timeout) {
  let startTime = new Date();

  while (1) {
    let currentTime = new Date();

    if (currentTime.getTime() - startTime.getTime() > timeout) {
      return;
    }
  }
}

setTimeOutSync(1000);
console.log("Hi there!");

// ====================== What makes the function async =====================//

function ReadFromTwoFiles(file1, file2) {
  // first read through first file
  // readFile, setTimeOut, fetch, database calls
  // Then read through second file

  return [file1Res, file2Res];
}
