console.log("start");

// macrotask
setTimeout(() => {
   console.log("setTimeout 0");
}, 0);

// microtask
Promise.resolve().then(() => {
   console.log("Promise");
});

console.log("end");
