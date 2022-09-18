console.log("p1 comes with tickets...");
console.log("p2 comes with tickets...");

// let promiseWifeBringsTickets = new Promise((resolve) => {
//     console.log("Husband: My wife is bringing the tickets...");
//     resolve("tickets");
// })

// let getPopcorn = promiseWifeBringsTickets.then(() => {
//     console.log("Husband:we should go in we got the tickets...");
//     console.log("Wife : No I am hungry");
//     console.log("Husband: Ok i will get some popcorn");
//     return new Promise((resolve, reject) => resolve("popcorn"));
// });

// let getButter = getPopcorn.then(() => {
//     console.log("Husband : Here I have the popcorn, now??");
//     console.log("Wife : I need some butter...");
//     return new Promise((resolve) => resolve("butter"));
// })

// getButter.then(() => {
//     console.log("Finally its done ....");
// })


let promiseWifeBringsTickets = new Promise((resolve) => {
    resolve("tickets");
})

let getPopcorn = new Promise((resolve) => {
    resolve("Popcorn");
});

let getButter = new Promise((resolve) => {
    resolve("Butter");
})


const preMovie = async () => {
    const msg1 = await promiseWifeBringsTickets;
    console.log("Husband: My wife is bringing the tickets...");
    console.log("Husband:we should go in we got the tickets...");
    console.log("Wife : No I am hungry");
    console.log("Husband: Ok i will get some popcorn");
    const msg2 = await getPopcorn;

    console.log("Husband : Here I have the popcorn, now??");
    console.log("Wife : I need some butter...");
    const msg3 = await getButter;

    console.log("Here is ur ", msg3);
    console.log("Finally its done...");
    return msg1 + msg2 + msg3;

}
preMovie().then((message)=>console.log(message));

console.log("p3 comes with tickets...");
console.log("p4 comes with tickets...");
