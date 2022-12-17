// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log("Code started", time);
// function abcd() {
//     return new Promise((resolve, reject) => {
//         time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         console.log("Inside the promise at ", time);
//         let i = 0;
//         while (i < 10000000) {
//             i++;
//         }
//         time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         console.log("Resolving the promise ", time);
//         resolve()
//     })
// }

// time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log("Calling the function", time);
// console.log(abcd());

// time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log("End of the code",time);

function abcd() {
    return new Promise((resolve, reject) => {
        resolve("123")
    })
}

console.log(abcd().then((log) => console.log(log)));