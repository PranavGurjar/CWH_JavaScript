// practice_set_q2

let arr2 = [1, 2, 3];
let b;
do{
    b = prompt("enter the number : ");
    b = Number.parseInt(b);
    arr2.push(b);
    console.log(b);
    console.log(arr2);
}while(b!=0);

