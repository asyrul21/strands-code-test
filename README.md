# Strand Code Test Answers

You can run any of the code in the questions below in nodeJS environment by running:

```bash
node <question>.js

e.g.

node Q1.js
```

## Q1

```javascript
const closure = (function count() {
  let counter = 0;
  return (increament = () => {
    counter += 1;

    // log to console
    console.log("Counter:", counter);

    return counter;
  });
})();

closure();
closure();
closure();
```

## Q2

```javascript
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
```

The variable `i` is local to the scope of the `sampleFunction` method. Upon execution of the for loop, functions which logs the value of `i` is pushed into the array.

If you run the above (slightly modified) Q2 code, you'll notice that the `arr[i]()` within the sampleFunction outputs the right values : 0,1,2 . This is because the `i` used refers to one in local to its parent scope - the `sampleFunction`.

However, when executing the line `var sf = sampleFunction();`, the value of i has become 3 - due to the `i++`. Hence, when `sf[0]()` and the others are called (outside of the context of `sampleFunction`), they are simply executing the function, in this case, it is logging the value of `i`, which is 3.

This is similar to the Closure concept in Q1.

Reference:

https://stackoverflow.com/questions/36135423/javascript-array-with-callback-function

## Q3

Promises are normally implemented when calling asynchronus functions. For example, when making Http GET request to an API endpoint, after which the request may be successful, or it can be rejected. For each of these outcomes, users are able to define what happens, using the Resolve and Reject arguments of the Promise.

Example:

```javascript
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
```

## Q4

```javascript
const mul = (x) => (y) => (z) => x * y * z;

console.log(mul(2)(3)(4));
```

## Q5

```javascript
var names = ["John", "Paula", "Laura", "Ryan", "Charly"];
console.log(names);

delete names[3];

console.log(names); // [ 'John', 'Paula', 'Laura', <1 empty item>, 'Charly' ]
console.log(names.length); // 5
```

Running the above (slightly modified) Question 5 code gives the following output in the console:

```bash
[ 'John', 'Paula', 'Laura', 'Ryan', 'Charly' ]
[ 'John', 'Paula', 'Laura', <1 empty item>, 'Charly' ]
5
```

This is because using the `delete` statement only removes the item from the array, but it does not restructure and change the length of the array once the removal has been done. Other better ways to approach this problem is using splicing, or filter.

Reference:

https://stackoverflow.com/questions/51688366/why-are-empty-items-in-my-array-and-how-do-i-get-rid-of-them

## Q6

Running the code from Q6 gives the following output in the Node console:

```bash
> var foo = function bar (){ return 12 ; };
undefined
> typeof bar();
Thrown:
ReferenceError: bar is not defined
>
```

We get `undefined error` because the function name is only local to the function body. If we modify the code slightly to be :

```javascript
var foo = function bar() {
  console.log("Type of Bar from within function:", typeof bar);
  return 12;
};

// console.log(typeof bar());

foo();
```

Then we get:

```bash
Type of Bar from within function: function
```

Reference:

https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

## Q7

Calculating the length of associative array / hash table:

```javascript
var counterArray = { A: 3, B: 4 };
counterArray["C"] = 1;

console.log(Object.keys(counterArray).length); // 3
```

Reference:

https://stackoverflow.com/questions/10563251/length-of-a-javascript-associative-array
