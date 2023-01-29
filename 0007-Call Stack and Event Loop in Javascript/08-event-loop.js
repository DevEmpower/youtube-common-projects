console.log("start");

setTimeout(() => {
   console.log("setTimeout 3000 ms");
}, 3000);

Promise.resolve().then(() => {
   console.log("Promise 1");
});

setTimeout(() => {
   console.log("setTimeout 2000 ms");
}, 2000);

setTimeout(() => {
   console.log("setTimeout 1000 ms");
}, 1000);

setTimeout(() => {
   console.log("setTimeout 0 ms");
}, 0);

Promise.resolve().then(() => {
   console.log("Promise 2");
});

console.log("end");
