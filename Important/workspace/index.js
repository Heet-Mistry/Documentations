// Implementation using the callbackk hell
// 1. clean the room
// 2. take the grabage
// 3. take an ice cream

// let clean = (cb) => {
//     console.log("Cleaned the room");
//     cb()
// }
// let takeg = (cb) => {
//     console.log("Took the garbage");
//     cb()
// }

// let ice = () => {
//     console.log("got an ice cream");
// }

// // callback hell pyramid doom
// let solver = () => {
//     clean(
//         () => {
//             takeg(
//                 ice
//             )
//         }
//     )
// }
// solver()


let clean = () => {
    return new Promise((resolve, reject) => {
        resolve("Cleaned the room")
    })
}


let takeg = () => {
    return new Promise((resolve, reject) => {
        resolve("Took the garbage")
    })
}

let ice = () => {
    return new Promise((resolve, reject) => {
        resolve("Got an ice cream")
    })
}

// still more linear structure
// clean().then((msg) => {
//     console.log(msg);
//     return takeg()
// }).then((msg) => {
//     console.log(msg);
//     return ice()
// }).then((msg) => {
//     console.log(msg);
// })

// more readable implementation of the callback hell and the promise chains
async function solver() {
    const msg1 = await clean()
    console.log(msg1);
    const msg2 = await takeg()
    console.log(msg2);
    const msg3 = await ice()
    console.log(msg3);
}
solver()