console.log("start");

// microtask
queueMicrotask(() => {
   console.log("queueMicrotask");
});

// microtask
Promise.resolve().then(() => {
   console.log("Promise");
});

console.log("end");
