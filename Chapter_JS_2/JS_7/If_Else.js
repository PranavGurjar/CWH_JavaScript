let a = prompt("Hey what's your age? ");
a = Number.parseInt(a);
if (a < 0) {
    alert("This is invalid age.");
}
else if(a<9){
    alert("You are a Kid and you cannot think about driving");
}else if(a>9 && a<18){
    alert("You are a Kid but you can think about driving after 18");
}else if(a>18){
    alert("You are valid for driving as your age above 18.");
}
alert("Thank You!");
console.log("Thank You!");

console.log("You can",( a<18 ? "not drive" : "drive"));