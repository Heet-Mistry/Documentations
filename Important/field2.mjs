// function throttle(func,ms){
//     let isThrottled = false;
//     let savedArgs = null,savedThis = null;

//     function wrapper(){
//         if (isThrottled) {
//             console.log("here in if for ",arguments)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }

//         isThrottled = true;
//         func.apply(this,arguments)

//         setTimeout(function(){
//             isThrottled = false;
//             if (savedArgs) {
//                 console.log("here for ",savedArgs)
//                 wrapper.apply(savedThis,savedArgs);
//                 savedArgs = null;
//                 savedThis = null;
//             }
//         },ms)
//     }

//     return wrapper;
// }

// let cnt = 0;
// function func(name) {
//     console.log(++cnt)
// }

// let t = throttle(func, 1500);
// t("1")
// t("2")
// t("3")
// t("4")

// const user = {
//     name: "dhairya",
//     print() {
//         console.log(this)
//         console.log(this.name)
//     },  
//     toString() {
//         return this.name;
//     },

//     valueOf() {
//         return this.name.length;
//     }
// }

// alert(user)
// alert(user+10)
const user = {
    name:"dhairya",
}

let surname = "rupala"
user[surname] = "hello";
for (let obj in user) {
    console.log(obj);
}

