// let say if we clean the room and then take the grabage then we
// will recieve the ice cream lets implement it with the promises


// with the help of the promises
// let cleanRoom = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Cleaned the room...");
//     })
// }

// let takeGarbage = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Took the garbage...");
//     })
// }

// let winIceCream = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Oooyayy...");
//     })
// }

// cleanRoom().then((message) => {
//     console.log(message);
//     return takeGarbage();
// }).then((message) => {
//     console.log(message);
//     return winIceCream();
// }).then((message) => {
//     console.log(message);
// })



// solved with the help of the callback
// results in the callback hell we can see

// let clean = (cb) => {
//     console.log("Cleaned the room");
//     cb();
// }

// let takeg = (cb) => {
//     console.log("took the grabage");
//     cb();
// }

// let icecream = () => {
//     console.log("oooyyy");
// }

// let solver = () => {
//     clean(() => {
//         takeg(() => {
//             icecream();
//         })
//     })
// }
// solver();
import obj from "./index.mjs";
let id = Object.getOwnPropertySymbols(obj);
console.log(obj[id[0]]);