// // function compose(...args) {
// //     return function wrapper(num) {
// //         let currentParams = num;
// //         let n = args.length;
// //         for (let i = n - 1; i >= 0; i--){
// //             currentParams = args[i].call(null, currentParams);
// //         }
// //         return currentParams;
// //     }
// // }

// // function f(x) {
// //     return x * 2;
// // }

// // function g(x) {
// //     return x ** 2;
// // }

// // // let func = compose(obj1.f, obj2.g);
// // // console.log(func(2));

// Function.prototype.customBind = function (thisArg,...args) {
//     let ctx = this;
//     return (...restArgs) => {
//         return thisArg.f(...args,...restArgs)
//     }
// }

// const obj = {
//     x: 2,
//     f: function (a,b) {
//         return this.x * a * b;
//     }
// }

// let func = obj.f.customBind(obj, 2);
// console.log(func(3));

// function a() {
//     console.log('asdf');
// }

// a.ff = 'heet'


// console.log(a.ff);
// a();
// // obj.x = 3;
// // console.log(func(3));


// let args = { 1: "dahidya" }
// let arr = [1,2,3]
// for (let item in arr) {
//     console.log(arr[item]);
// }
// console.log({ ...args })


// let d = new Date()
// console.log({ ...d })
// const obj = {
//     name: "asdasd",
//     tostring() {
//         return "hello";
//     }
// }

// console.log(obj)
// console.log(isJSON)

const obj = {
    a: 10,
    b: {
        c:20
    },
    d: {
        e: 30,
        f: {
            g:40
        }
    }
}


const kept = ["c", "f", "g"]
const data = JSON.stringify(obj, (key, val) => {
    if (kept.includes(key)) return undefined;
    return val;
});
console.log(JSON.parse(data))

const obj1 = {
    a:undefined
}
console.log(JSON.stringify(obj1))
let d = JSON.stringify(obj1)
d = JSON.parse(d)
console.log(d.a)

