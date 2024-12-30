// practice_set_q2

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);

//include
let line = "Pranav the great";
let name = "Pranav";

console.log(line.includes(name));
console.log(`the word "${name}" ${line.includes(name)?"is":"is not"} include in the line.`);


//startwith
let str = "Mahajan";

console.log(str.startsWith("Maha"));
console.log(str.startsWith("Mah",5));
console.log(str.startsWith("Mahan"));
console.log(str.endsWith("jan"));
console.log(str.endsWith("jan",4));


//endswith