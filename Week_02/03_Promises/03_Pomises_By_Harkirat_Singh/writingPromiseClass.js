/*
Inside the constructor, the line this.a = a; assigns the value of the parameter a to a property named a on the instance of the class.
The this keyword refers to the current instance of the class. So, this.a creates a property a on the instance and assigns it the value passed to the constructor.
*/

class myPromise {
  constructor(funct) {
    function afterDone() {
      this.resolve();
    }
    funct(afterDone);
  }

  then(callback) {
    this.resolve = callback;
  }
}

function readTheFile(resolve) {
  setTimeout(() => {
    console.log("callback based setTimeout assignment completed");
    resolve();
  }, 3000);
}

function readfile() {
  return new myPromise(readTheFile);
}

function callback() {
  console.log("Callbacks has been called");
}

const p = readfile();
p.then(callback);
