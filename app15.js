const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }

  if (guess == random) {
    console.log("you are right congrats random number wass", random);
    break;
  } else if (guess < random) {
    guess = prompt("your guess was to small .please try again");
  } else {
    guess = prompt("your guess was to large .pleease try again");
  }
}
