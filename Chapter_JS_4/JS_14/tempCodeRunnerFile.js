let name = 'Harry';
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,4));
console.log(name.replace('Har','Per'));
let friend = "ram";
console.log(name.concat(" is the bestfriend of ",friend," thanks"));

let gf = "     rashmi       ";
console.log(gf);
console.log(gf.trim());

let group = "nil"+"nitin"+"mukesh";
console.log(group[0]);
console.log(group[1]);
console.log(group[2]);
console.log(group[3]);
console.log(group[4]);
console.log(group[5]);
// group[0] = "m";     // This is not possible
console.log(group);


for(let i=0; i<group.length; i++)
{
    console.log(group[i]);
}

// for (let i = 0; i < group.length; i++) {
//   console.log(group[i]);
// }


/*
let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]= "o" // This is not possible 
console.log(fr)
// QuickQuiz: Use a for loop to print a string


*/