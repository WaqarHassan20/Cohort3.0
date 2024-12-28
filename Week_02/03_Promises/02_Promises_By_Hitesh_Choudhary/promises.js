// Run these functions one by one to check output of each.
// =============== First promise ===============

const promisesOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("My Timeout Task");
    resolve("Timeout promise Successfully resolved");
  }, 2000);
});

promisesOne.then((res) => {
  console.log(res);
});

// =============== second promise ===============

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hi, i am 2nd promise");
    resolve("2nd Promise resolved successfully");
  }, 4000);
}).then((response) => {
  console.log("My promise is resolves successfully");
});

// =============== Third promise : All in one promise ===============

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ username: "Chai", email: "chai@chai.com" });
    } else {
      reject("ERROR : Some error occured");
    }
  }, 3000);
})
  .then((user) => {
    console.log(user);
    return user;
  })
  .then((user) => {
    console.log("Username is : ", user.username);
    console.log("Email is : ", user.email);
  })
  .catch((response) => {
    console.log(response);
  })
  .finally(() => {
    console.log("The promise is finally rejected or resolved.");
  });

// =============== Fourth promise : Using async await ===============

let fourthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ username: "JavaScript", email: "ChaiAurCode@chai.com" });
    } else {
      reject("ERROR : JS went wrong");
    }
  }, 3000);
});

async function counsumePromiseFive() {
  try {
    const result = await fourthPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
counsumePromiseFive();

// =============== Calling API using async await ===============

async function getDataFromAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // =========== Direct printing of response =============
    // console.log(response);
    // console.log("Status Response : ", response.status);
    //
    // ========= Json format printing of response =========
    const data = await response.json();
    console.log(data);
    console.log(response);
  } catch (error) {
    console.log("ERROR : ", error);
  }
}
getDataFromAPI();

// ================== now calling api using then and catch ==================

fetch("https://js-onplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Some kind of error must have occured");
  });
