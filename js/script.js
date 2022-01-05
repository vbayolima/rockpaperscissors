function handleWinner() {
  $(".result").text("You win!");
  $(".result").css("color", "#1ee653");
}

function handleTie() {
  $(".result").text("It's a tie!");
  $(".result").css("color", "orange");
}

function handleLoser() {
  $(".result").text("You lose. Try again!");
  $(".result").css("color", "#ff0a0a");
}

function getRandomComputerChoice() {
  let computerNumber;
  computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);

  //computer choice
  $(".computerChoice").text(`computer choice is ${computerNumber}`);

  if (computerNumber === 1) {
    $(".computerChoice").text("Rock");
  } else if (computerNumber === 2) {
    $(".computerChoice").text("Scissors");
  } else if (computerNumber === 3) {
    $(".computerChoice").text("Paper");
  }

  return computerNumber;
}

// computerAnswer is int
// userInput is string
// return value is: string ("User wins!", "Computer wins!" or "No one wins!")
function chooseWinner(computerAnswer, userInput) {
  if (computerAnswer === 1 && userInput == "rock") {
    return "No one wins!";
  } else if (computerAnswer === 1 && userInput === "paper") {
    return "Computer wins!";
  } else if (computerAnswer === 1 && userInput === "scissors") {
    return "User wins!";
  } else if (computerAnswer === 2 && userInput === "scissors") {
    return "No one wins!";
  } else if (computerAnswer === 2 && userInput === "paper") {
    return "User wins!";
  } else if (computerAnswer === 2 && userInput === "rock") {
    return "Computer wins!";
  } else if (computerAnswer === 3 && userInput === "paper") {
    return "No one wins!";
  } else if (computerAnswer === 3 && userInput === "rock") {
    return "User wins!";
  } else if (computerAnswer === 3 && userInput === "scissors") {
    return "Computer wins!";
  } else {
    $(".result").text(
      "oops... looks like there's a mistake in your input. Try checking the image to make sure you spelled your input correctly. And make sure to use capital letters!"
    );
  }
}

let globalNumber = 0;
$(".play").click(function () {
  let userInput = $(".input").val();
  userInput = userInput.toLowerCase();

  $(".userChoice").text(userInput);

  let computerAnswer = getRandomComputerChoice();

  let winner = chooseWinner(computerAnswer, userInput);
  if (winner === "User wins!") {
    handleWinner();
  }
  else if (winner === "Computer wins!"){
    handleLoser();
  }
  else if (winner === "No one wins!"){
    handleTie();
  }

  // this refreshes the input bar
  $(".input").val("");
});
