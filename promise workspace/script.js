let n = new Promise((res, rej) => {
    setTimeout(() => {
        throw new Error("asdas")
    },500)
    setTimeout(rej, 100);
})

n.then(() => { },()=>console.log("something"))