let promiseToCleanRoom = new Promise((resolve, reject) => {
    // cleaning the room
    let isClean = false;
    if (isClean) {
        resolve("Cleaned...");
    }
    else {
        reject("Not cleaned...");
    }
})

promiseToCleanRoom.then((message) => {
    console.log("The room is",message);
}).catch((message) => {
    console.log("The room is",message);
})