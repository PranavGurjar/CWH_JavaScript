/*
for(let i=0; i<5; i++)
{
    console.log(i);
}
*/


/*
// Program to add first n natural numbers
let a = prompt("Enter the value ");
a = Number.parseInt(a);
let sum = 0;

for(let i=1; i<a+1; i++)
    {
       console.log(sum += i); 
    }

alert("Sum of first " + a + " natural numbers is " + sum);
*/

let obj = {
    pranav : 22,
    yash : 21,
    kunal : 19,
    sujal : 14
}

for(let p in obj) {
    console.log("Age of "+ p +" is : "+ obj[p]);
}

for(let r of "pranav"){
    console.log(r);
}

