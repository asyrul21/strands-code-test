const https = require("https");

let promiseEg = new Promise((resolve, reject) => {
  https
    .get("https://jsonplaceholder.typicode.com/posts", (resp) => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        resolve(JSON.parse(data));
      });
    })
    .on("error", (err) => {
      reject("Error: " + err.message);
    });
});

promiseEg.then(
  (data) => {
    console.log("Successfully obtained data:");
    console.log(data.slice(0, 5));
  },
  (error) => {
    console.log("ERROR ENCOUNTERED:");
    console.log(error);
  }
);

// https://jsonplaceholder.typicode.com/posts
