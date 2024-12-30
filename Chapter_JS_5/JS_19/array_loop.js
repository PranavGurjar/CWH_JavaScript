let num = [3, 5, 1, 2, 4]
console.log("For Loop in JS");
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

console.log("For-Each Loop in JS");
num.forEach((element) =>{
    console.log(element);
})

console.log("for...of Loop in JS");
for(let n of num){
    console.log(n);
}

console.log("for...in Loop keys in JS");
for(let n in num){
    console.log(n);
}
console.log("for...in Loop object in JS");
for(let n in num){
    console.log(num[n]);
}

console.log("Array.from in JS");
let friend = "pranav";
let arr = Array.from(friend);
console.log(arr);


/*
let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}
*/