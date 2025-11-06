// console.log("vaishnavi")


// // function,return,conditional statement

// function vote(){
//     const num=Number(prompt("enter age"))
//    return num
// }
// let test=vote()
// if(test>=18) console.log("eligibel")
// else console.log("not eligible")


// // switch cases
// let a=Number(prompt("enter a"))
// let b=Number(prompt("enter b"))
// let operator=prompt("enter valid arthimatic operator")
// switch(operator){
//     case "+":
//          console.log(a+ b)
//          break;
//     case "-":
//          console.log(a- b)
//          break;
//   case "*":
//          console.log(a* b)
//          break;
//   case "/":
//          console.log(a/ b)
//          break;

//       default:
//         console.log("invalid")   
// }



// // if else
//    let c1=prompt("enter color")
// if(c1=="red") console.log("stop")
//    else if(c1=="green") console.log("goo")
//        else if(c1=="yellow") console.log("Ready to go")
//     else console.log("Invalid color")
 

//regular functions are hoisted
//function expressions are not hoisted

// function add(a, b) {
//   return a + b;
//   console.log("This will not execute");  //this will not be executed coz of return
// }
// console.log(add(5, 3));


// //arrows function
// const arrow=(a,b)=>a*b 
// console.log(arrow(3,5))


// (function (){
//   console.log("vaishnavi")         //immediate invoke function
// })
// ()


//  const n=n=>n*n
//  function operation(a,cb){   //receving other function as parameter(HOF)
//     return cb(a)
// }
// console.log(operation(67,n))  //function as argument(CB)



// let arr=[1,2,3,4,5]
// arr.map((n)=>{console.log(n)})
// arr.map((n)=>console.log(n*2))

// const even=arr.filter((n)=>n%2==0);console.log(even)

// const total=arr.reduce((a,b)=>a+b,0)
// console.log(total)


// let arr=[1,2,3,4,5]
// arr.pop()
// console.log(arr)


// //closure
// function parent(name){
//     function child(){
//         console.log("hello" +name)
//     }
//     child()
// }
// parent("hgjgj")



// //function curring-- breaking the function which takes multiple args into chain of function where each takes 1 arg
// function add(a){
//     return function(b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }
// console.log(add(3)(3)(9))


// //async function with fetch
// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users[0].name);
// }
// getData();
