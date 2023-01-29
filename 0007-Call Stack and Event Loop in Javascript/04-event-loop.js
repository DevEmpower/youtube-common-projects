console.log("start");

// microtask
queueMicrotask(() => {
   console.log("queueMicrotask");
});

console.log("end");
