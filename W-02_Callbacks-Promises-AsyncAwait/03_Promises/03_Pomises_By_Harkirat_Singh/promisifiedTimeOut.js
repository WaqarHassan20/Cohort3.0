// ============== TimeOut Promisified ==============

/* Here i am sending the main function as an argument and it is then executed
 and logged the statement simply but after the 3 seconds */

function waitFor3seconds(resolve) {
  setTimeout(resolve, 3000);
}
function main() {
  console.log("Main function is called successfully");
}
waitFor3seconds(main);

// ============== Adding twist init ==============

/* Here i am leaning a promise to call wait2sec function and as it is a promise it will
call then if it resolved.So it is calling the main conditionally if promise resolved.
Asal kaam 2 functions ka e hai ; waitfor3sec and main.  */

function waitFor3sec(resolve) {
  setTimeout(resolve, 3000);
}

function main() {
  console.log("Main successfully Done!");
}

function makeTimeOutPromisified() {
  return new Promise(waitFor3sec);
}

makeTimeOutPromisified().then(main);
// makeTimeOutPromisified().then(main); this is promise based approach
// setTimeout(callback, 3000); this is callback based approach
