// Code without the callbacks
// function f1(res) {
//     return res + 1;
// }

// function f2(res) {
//     return res + 2;
// }

// function f3(res) {
//     return res + 3;
// }

// let res = 0;
// res = f1(res);
// res = f2(res);
// res = f3(res);
// console.log(res);


// code with the callback
// function f1(res, callback) {
//     callback(res + 1);
// }

// function f2(res, callback) {
//     callback(res + 2);
// }

// function f3(res) {
//     console.log(res+3);
// }

// function solve() {
//     f1(0, (res1) => {
//         f2(res1, (res2) => {
//             f3(res2);
//         })
//     })
// }

// solve();


// console.log("Hello async ...");
// console.log("Async js starting...");
// const d = new Date();
// let time = d.getTime();
// console.log("The sync start is ", time);
// setTimeout(() => {
//     const d = new Date();
//     let time = d.getTime();
//     console.log("Started at - ",time);
//     console.log("Inside the time out...");
//     for (let i = 0; i < 1000; i++){
//         for (let j = 0; j < 77000; j++) { }
//      }
//     time = d.getTime();
//     console.log("Ended at - ",time);
// }, 0);
// for (let i = 0; i < 50000; i++) {
//     for (let j = 0; j < 10000; j++){
//         for (let t = 0; t < 50; t++) { }
//     }
// }
// time = d.getTime();
// console.log("The sync end is ",time);


// console.log("sync...");
// let a = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("inside timeout...");
//         resolve();
//     }, 4000);
// });

// for (let i = 0; i < 5000; i++){
//     for (let j = 0; j < 400; j++){
//         for (let t = 0; t < 4040; t++) { }
//     }
// }
// console.log("end of the code here...");


let a = new Promise((resolve) => resolve("a"));
let b = new Promise((resolve) => resolve("b"));
let c = new Promise((resolve,reject) => reject("c"));
let d = new Promise((resolve) => resolve("d"));

// a.then(() => {
//     b();
// }).then(() => {
//     c();
// }).then(() => d()).catch(() => {
//     console.log("Okay fine maybe...");
// })

Promise.all([a,b,c,d]).then((val)=>console.log(val)).catch((ok)=>console.log(ok))

