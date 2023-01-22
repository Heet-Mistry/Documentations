// // let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

// // let userObj = JSON.parse(userStr);

// // console.log(userObj);

// // userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

// // userObj = JSON.parse(userStr, (key, value) => {
// //   if (typeof value === 'string') {
// //     return value.toUpperCase();
// //   }
// //   return value;
// // });

// // console.log(userObj);

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice());
// // console.log(arr.splice(1, 2, "dhairya"));
// // console.log(arr);

// let d = arr.slice()
// d[0] = "ahsd"
// console.log(arr);

let obj = {
    user:"dhairya"
}

let id = Symbol()
obj[id] = "secret"

export default obj;