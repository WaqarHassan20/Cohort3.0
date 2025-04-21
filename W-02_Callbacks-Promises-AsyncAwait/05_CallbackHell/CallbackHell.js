// ========================================
// print Hello on screen after one second
// then Hi after 3 seconds
// then Hola Amigo after 5 seconds.
// ========================================
setTimeout(() => {
  console.log("Hi");
  setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("Hola Amigo");
    }, 5000);
  }, 3000);
}, 1000);

// ==================================
// === Callback hell of functions ===
// ==================================

function step3call() {
  console.log("Hola Amigo 2");
}

function step2call() {
  console.log("Hello 2");
  setTimeout(step3call, 5000);
}

function step1call() {
  console.log("Hi 2");
  setTimeout(step2call, 3000);
}

setTimeout(step1call, 1000);

// ==================================
// ==== CallbackHell in promises ====
// ==================================

function makeTimeOutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

makeTimeOutPromisified(3000).then(function callback() {
  console.log("Hello 3 seconds done");
  makeTimeOutPromisified(4000).then(function () {
    console.log("Hello 4 seconds done");
    makeTimeOutPromisified(5000).then(function () {
      console.log("Hello 5 seconds done");
    });
  });
});

// ==================================
// ==== Chaining in promises ====
// ==================================

function makeTimeOutPromisified2(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

makeTimeOutPromisified2(1000)
  .then(() => {
    console.log("Hello, 1 seconds");
    return makeTimeOutPromisified2(3000);
  })
  .then(() => {
    console.log("Hello, 3 seconds");
    return makeTimeOutPromisified2(5000);
  })
  .then(() => {
    console.log("Hello, 5 seconds");
  });

console.log("outside of the callback hell");