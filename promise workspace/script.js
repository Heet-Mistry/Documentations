// console.log(this)
// function func() {
//   "use strict"
//   console.log("Here",this);
//   setTimeout(function(){
//     console.log("In time",this)
// },1000)

//   function a(){
//     console.log("In the a",this)
//   }
//   a()
// }

// func()




let arr = [1, 2, 3]
arr.forEach(()=>console.log(this))