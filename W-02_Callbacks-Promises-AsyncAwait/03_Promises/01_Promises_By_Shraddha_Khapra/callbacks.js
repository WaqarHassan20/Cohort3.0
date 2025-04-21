function getData(ResultData, waitingTime) {
  setTimeout(() => {
    console.log("My ID is : ", ResultData);
    console.log("Printed after waiting", waitingTime, "seconds");
  }, waitingTime);
}

getData("123", 2000);
getData("456", 4000);
// now reverse this to check the printing with respect to Time
getData("123", 6000);
getData("456", 4000);

// =============== CallBack function passing =================

let count = 1;
function fetchData(dataId, getNextData) {
  // Simulate an asynchronous operation with a 2-second delay
  setTimeout(() => {
    // Log the current data ID to demonstrate the fetch process
    console.log("Data ", count, " = ", dataId);
    count++;
    // Check if a callback function is provided
    // This allows for chaining multiple asynchronous operations
    if (getNextData) {
      // Execute the callback function if it exists
      getNextData();
    }
  }, 2000);
}

fetchData(5, () => {
  console.log("Loading data 2 ....");
  // Anonymous callback function that calls fetchData again
  fetchData(10, () => {
    console.log("Loading data 3 ....");
    // Anonymous callback function that calls fetchData again
    fetchData(15, () => {
      console.log("Loading data 4 ....");
      // Anonymous callback function that calls fetchData again
      fetchData(20, () => {
        console.log("Loading data 5 ....");
        // Anonymous callback function that calls fetchData again
        fetchData(25);
      });
    });
  });
});

/** EXPLANATION OF THE ABOVE MENTIONED CODE //
 * Simulates fetching data asynchronously with a delay
 *
 * @param {number|string} dataId - Unique identifier for the data being fetched
 * @param {Function} [getNextData] - Optional callback function to be executed after data fetch
 *
 * This function demonstrates the use of callbacks in asynchronous operations:
 * 1. It uses setTimeout to simulate an asynchronous data fetching process
 * 2. Logs the dataId after a 2-second delay
 * 3. If a callback function is provided, it calls the callback after logging
 */
