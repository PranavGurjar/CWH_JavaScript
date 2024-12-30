//delete
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num1);
console.log(num1.length);
delete num1[0];
console.log(num1);
console.log(num1.length);

num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num3 = [211, 212, 213, 214, 415, 416, 417, 418, 419]
let newArray = num1.concat(num2, num3);
console.log(newArray);
console.log(num1, num2, num3);

const compare = (a, b) =>{
    return a - b;
}

let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
console.log(num);
num.sort();
console.log(num);
num.reverse();
console.log(num);
num.sort(compare);
console.log(num);
num.reverse();
console.log(num);

//splice and slice
num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num.splice(0, 2, 100, 102, 103, 104, 105);
console.log(num);
console.log(deletedValues);

num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slice_num = num1.slice(4);
console.log(slice_num);
slice_num = num1.slice(6, 8);
console.log(slice_num);

/*
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)

*/