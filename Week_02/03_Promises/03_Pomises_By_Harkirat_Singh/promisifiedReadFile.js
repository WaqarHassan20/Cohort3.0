// ============================================================
// ================== Promisified ReadFile ====================
// ================== This is done by  my own  ================
// ============================================================

const fileSystem = require("fs");

function readFileFunction(filename) {
  return new Promise((resolve, reject) => {
    fileSystem.readFile(filename, "utf-8", (error, data) => {
      if (error) {
        reject("ERROR : error occured");
      } else {
        resolve(data);
      }
    });
  });
}

function printFile(fileData) {
  console.log(fileData);
}

function handleError(errorData) {
  console.log(errorData);
}

function finalStatement() {
  console.log("Finally file either resolved or rejected");
}

readFileFunction("hello.txt")
  .then(printFile)
  .catch(handleError)
  .finally(finalStatement);

// ============================================================
// ================== Promisified ReadFile ====================
// ================== This is done by my own ==================
// ================== short and easy to digest ================
// ============================================================

new Promise((resolve, reject) => {
  fileSystem.readFile("hello.txt", "utf-8", (err, data) => {
    resolve(data);
  });
}).then((content) => console.log(content));

// ==================================================== //
// ====== Now let's see how harkirat has done ========
// ==================================================== //

function readTheFile(resolveIsPassedFromPromiseFunctoinAsFirstArgument) {
  fileSystem.readFile("hello.txt", "utf-8", (error, data) => {
    resolveIsPassedFromPromiseFunctoinAsFirstArgument(data);
  });
}

function readFile() {
  return new Promise(readTheFile);
}

function callback(content) {
  console.log(content);
}

const p2 = readFile();
p2.then(callback);
