console.log("Array map method");

let arr = [45, 23, 21];
console.log(arr);
arr.map((a) => {
    console.log(a+1);
})
console.log(arr);

let a = arr.map((value_a, index, arr) => {
    console.log(value_a, index, arr);
})

console.log("Array filter method");
let arr1 = [45, 23, 21, 0, 3, 5];
console.log(arr1);
let b = arr1.filter((a) => {
    return a<10;
})
console.log(b, arr1);

console.log("Array reduce method1");
let arr3 = [1, 2, 3, 5, 2, 1]
console.log(arr3);
let c = arr3.reduce((a1, a2) => {
    return a1+a2;
})
console.log(c, arr3);

console.log("Array reduce method2");
let arr4 = [3, 45, 23, 21, 0, 3, 5];
console.log(arr4);
const reduceFunct = (a1, a2) => {
    return a1+a2;
}
let d = arr4.reduce(reduceFunct);
console.log(d, arr4);



/*
let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
// console.log(arr)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)
*/