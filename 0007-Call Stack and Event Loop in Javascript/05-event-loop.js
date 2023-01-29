console.log("start");

// microtask
Promise.resolve().then(() => {
    console.log("Promise");
  });

console.log("end");
