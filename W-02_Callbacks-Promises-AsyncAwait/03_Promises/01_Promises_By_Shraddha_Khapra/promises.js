// ================ Here the Promises comes into picture ================
function getTheData(dataID, nextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data :", dataID);
      resolve("Promise successfull");
      if (nextData) {
        nextData();
      }
    }, 2000);
  });
}

console.log("Loading first promise .....");
getTheData(12)
  .then((res) => {
    console.log(res);
    console.log("Loading next promise .....");
    return getTheData(34);
  })
  .then((res) => {
    console.log(res);
    console.log("Loading next promise .....");
    return getTheData(56);
  })
  .then((res) => {
    console.log(res);
    console.log("This was Last promise ");
  });

// ================ Usecase of promise with function ================

const getPromise = () => {
  return new Promise((resolve, reject) => {
console.log("Hello I am Promise");
resolve("Promise resolved");
reject("Promise rejected");
  });
};

let promise = getPromise();

promise.then((result) => {
  console.log("Promise fulfilled :", result);
});

promise.catch((error) => {
  console.log("Promise failed :", error);
});

// ================ Using promise with 2 differnet function ================

const asyncFun1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("Promised resolved");
    }, 2000);
  });
};

const asyncFun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("Promised resolved");
    }, 3000);
  });
};

asyncFun1().then(() => {
  console.log("Loading data 2 .....");
  asyncFun2().then();
});
