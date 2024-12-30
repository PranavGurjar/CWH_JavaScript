// practice_set_q4
let n = prompt("Enter the number?");
n = Number.parseInt(n);

if(n%2==0)
{
    alert("Number is Divisible by 2");
}else if(n%3==0){
    alert("Number is Divisible by 3")
}else{
    alert("Sorry number is not divisible by 2 and 3.")
}