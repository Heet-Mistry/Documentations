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

// function abcd() {
//     return new Promise((resolve, reject) => {
//         resolve("123")
//     })
// }

// console.log(abcd().then((log) => console.log(log)));

// let arr = [1,2,3,4,1,2]
// let st = new Set(arr)
// console.log(st);
// st.add(7)
// console.log(st);
// st.delete(1)
// console.log(st);
// console.log(st.has(1));

// for (let item of st) {
//     console.log(item);
// }

// for (let val in st.values()) {
//     console.log(val);
// }

// let mp = new Map([[1,"dhairya"],[2,"surname"]])
// for (let [k, v] of mp) {
//     console.log(k,v);
// }

// function debounce(func, timeout=0) {
//     let timer;
//     return (...args) => {
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             func.apply(this,args)
//         }, timeout)
//     }
// }

// function fetchResults() {
//     console.log("Fetching...");
// }

// const debouncedFunc = debounce(() => fetchResults())

// function wrapper() {
//     let a = 5;
//     return () => {
//         a = a + 1;
//         console.log(a)
//     }
// }

// let ab = wrapper()
// ab()
// ab()
// console.log("done");

// function func(a, b) {
//     if (!a || !b) {
//         console.log("Hello");
//     }
// }
// func()

// let arr = [1, 2, 33, 4, 0, -1]
// console.log(arr.sort((a,b)=>a-b));

// class User{
//     constructor(name) {
//         this.name = name
//     }

//     say() {
//         console.log(this.name);
//     }
// }


// let user = new User("dhairya")
// console.log(user.__proto__)
// console.log(User.__proto__);
// console.log(User.prototype);
// // console.log(user.name);

// class Animal{
//     name = "animal"
//     constructor() {
//         alert(this.name)
//     }
// }

// class Lion extends Animal{
//     name = 'Lion'
//     constructor() {
//         super()
//         alert(this.name)
//     }
// }

// const lion = new Lion()


// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();

// let obj = {
//     name:"dhairya"
// }

// let some = JSON.stringify(obj)
// let somethinf = JSON.parse(some, (key, value) => {
//     if (key == "name") return "rupala";
//     return value;
// });
// console.log(somethinf);

// console.log('a'>'A');

// let user = {
//     name: "dhairya",
//     say() {
//         console.log("Hello",this.name);
//     }
// }

// let binded_func = user.say.bind(user)
// setTimeout(() => binded_func(), 2000)
// delete user.name

// let animal = {
//     name: "animal",
//     voice: "grrrrr",
//     say() {
//         console.log(this.name);
//     }
// }

// let rabbit = {
//     name:"rabbit"
// }

// rabbit.__proto__ = animal
// console.log(rabbit.__proto__);
// console.log(Object.getPrototypeOf(rabbit));
// console.log(rabbit.say());

// let animal = {
//     name:"dhairya"
// }

// function Rabbit(name) {
//     this.name = name;
// }

// let x = {
//     name : "dhairya"
// }
// Object.setPrototypeOf(x,animal)
// let rab = new Rabbit("rupala")
// console.log(rab.__proto__);
// console.log(Object.getPrototypeOf(rab));
// console.log(Rabbit.prototype)
// console.log(x.__proto__);

class User{
    constructor(name) {
        this.name = name
    }

    disp() {
        console.log(this.name);
    }
}

let u1 = new User("dhairya")
console.log(Object.getPrototypeOf(u1));
console.log(User.prototype);
console.log(User);