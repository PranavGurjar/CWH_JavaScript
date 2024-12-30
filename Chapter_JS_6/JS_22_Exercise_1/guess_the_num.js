// Exercise 1: Guess the number
// Prize Amount: Rs 500 Amazon voucher
// let number = 0 // Generate random number here
// let chances = 0
// Keep asking for the number until the correct number is guessed
// Increment the chances variable

// Eventually after the game is over, display the (100 - Number of chances) and the actual number 

let input = prompt("Enter the number for guess: ");
input = Number.parseInt(input);
let random_num = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let count_chance = 0;
// let max_chances = 5;

while(input != random_num && count_chance<5){
  if(random_num>input){
    console.log("try input number bigger");
  }else{
    console.log("try input number smaller");
  }

  count_chance++;

  if(count_chance<5){
    input = Number.parseInt(prompt("Try again: "));
  }
}

if(random_num==input){
  console.log("congratulation, you win! \n the random number is :",random_num);
}
else{
  console.log("sorry, you lose! \n the random number is :",random_num);
}


/*

let input = prompt("Enter the number for guess: ");
input = Number.parseInt(input);

if (isNaN(input)) {
  console.log("Invalid input! Please enter a valid number.");
} else {
  let random_num = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  let count_chance = 0;
  let max_chances = 5;

  while (random_num !== input && count_chance < max_chances) {
    if (random_num > input) {
      console.log("The number is greater than your guess.");
    } else {
      console.log("The number is smaller than your guess.");
    }

    count_chance++;

    if (count_chance < max_chances) {
      input = Number.parseInt(prompt("Try again: "));
      if (isNaN(input)) {
        console.log("Invalid input! Exiting the game.");
        break;
      }
    }
  }

  if (random_num === input) {
    console.log("Congratulations! You guessed the number.");
  } else {
    console.log("Sorry, you've used all your chances. The correct number was:", random_num);
  }
}
*/

