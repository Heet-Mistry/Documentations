let a = new Promise((resolve, reject) => {
    console.log("This is first promise...");
    for (let i = 0; i < 1000000; i++){ }
    resolve("ok");
})

let b = new Promise((resolve, reject) => {
    console.log("This is second promise...");
    for (let i = 0; i < 1000000; i++){ 
        for (let j = 0; j < 10000;j++){}
    }
    resolve("fine");
})

let c = new Promise((resolve, reject) => {
    console.log("This is third promise...");
   for (let i = 0; i < 100; i++){ 
        for (let j = 0; j < 100;j++){}
    }
    resolve("maybes");
})

Promise.all([a, b, c]).then((val) => {
    console.log(val);
})

