let num = [1, 2, 3, 4, 5, 63];
console.log("Array : ",num,"\nType of variable : ", typeof num,"\nArray Length : " ,num.length,);

let b = num.toString();
console.log("String : ",b,"\nType of variable : ", typeof b,"\nString Length : " ,b.length,);

let c = num.join("+");
console.log("Array : ",c,"\nType of variable : ", typeof c,"\nArray Length : " ,c.length,);

let d = num.pop();
console.log("Array : ",num,"\nType of variable : ", typeof d,"\nPop Element : " ,d);

let e = num.push(21);
console.log("Array : ",num,"\nType of variable : ", typeof e,"\nPush Element : " ,e);

let f = num.shift();
console.log("Array : ",num,"\nShift Element : " ,f);

let g = num.unshift(1);
console.log("Array : ",num,"\nAfter Size using unshift Element : " ,g);

/*
// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(r, num)
console.log(r)
*/