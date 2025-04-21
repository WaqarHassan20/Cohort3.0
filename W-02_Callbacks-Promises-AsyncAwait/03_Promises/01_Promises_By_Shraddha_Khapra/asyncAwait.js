function API(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data =", dataID);
      resolve("success");
    }, 3000);
  });
}

(async function getWeatherData() {
  console.log("Getting Data 1 ");
  console.log(await API(33));
  console.log("Getting Data 2 .....");
  console.log(await API(44));
  console.log("Getting Data 3 .....");
  console.log(await API(55));
  console.log("Getting Data 4 .....");
  console.log(await API(66));
})(); // Using the IIFE function to save last call of function

// ==================== API example for async Await ================

function API() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("Weather Data");
        resolve("200");
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
}

async function getWeatherData() {
  try {
    let throughPut = await API();
    console.log(throughPut);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeatherData();

// ========================================================== //
// COMPARSIONS OF CALLBACK HELL, PROMISES, AND ASYNC AWAIT

// 1 - CALLBACKS HELL

// fetchData(5, () => {
//     console.log("Loading data 2 ....");
//     // Anonymous callback function that calls fetchData again
//     fetchData(10, () => {
//       console.log("Loading data 3 ....");
//       // Anonymous callback function that calls fetchData again
//       fetchData(15, () => {
//         console.log("Loading data 4 ....");
//         // Anonymous callback function that calls fetchData again
//         fetchData(20, () => {
//           console.log("Loading data 5 ....");
//           // Anonymous callback function that calls fetchData again
//           fetchData(25);
//         });
//       });
//     });
//   });

// 2 - PROMISES

// console.log("Loading first promise .....");
// getTheData(12)
//   .then((res) => {
//     console.log(res);
//     console.log("Loading next promise .....");
//     return getTheData(34);
//   })
//   .then((res) => {
//     console.log(res);
//     console.log("Loading next promise .....");
//     return getTheData(56);
//   })
//   .then((res) => {
//     console.log(res);
//     console.log("This was Last promise ");
//   });

// 3 - ASYNC AWAIT

// async function getWeatherData() {
//   console.log("Getting Data 1 ");
//   console.log(await API(33));
//   console.log("Getting Data 2 .....");
//   console.log(await API(44));
//   console.log("Getting Data 3 .....");
//   console.log(await API(55));
//   console.log("Getting Data 4 .....");
//   console.log(await API(66));
// }
