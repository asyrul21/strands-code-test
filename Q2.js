function sampleFunction() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });

    // internal scope of i
    arr[i](); // output 0, 1, 2
  }

  return arr;
}
var sf = sampleFunction(); // now i is 3
sf[0](); // Output: 3
sf[1](); // Output: 3
sf[2](); // Output: 3

// https://stackoverflow.com/questions/34259126/why-does-array-prototype-push-return-the-new-length-instead-of-something-more-us

// https://stackoverflow.com/questions/36135423/javascript-array-with-callback-function
