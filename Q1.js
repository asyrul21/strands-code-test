console.log("Hello World!");

// Q1 = closures
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
