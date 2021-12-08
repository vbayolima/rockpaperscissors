function handleWinner() {
  $(".result").text("You win!");
  $(".result").css("color", "green");
}

function handleTie() {
  $(".result").text("It's a tie!");
  $(".result").css("color", "orange");
}

function handleLoser() {
  $(".result").text("You lose. Try again!");
  $(".result").css("color", "red");
}

let globalNumber = 0;
$(".play").click(function() {
  let computerNumber;
  computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  // "computer choice"
  $(".computerChoice").text(`computer choice is ${computerNumber}`);

  let userInput = $(".input").val();
  userInput = userInput.toLowerCase();

  $(".userChoice").text(userInput);

  if (computerNumber === 1) {
    $(".computerChoice").text("Rock");
  }
  if (computerNumber === 2) {
    $(".computerChoice").text("Scissors");
  }
  if (computerNumber === 3) {
    $(".computerChoice").text("Paper");
  }

  if (computerNumber === 1 && userInput == "rock") {
    handleTie();
  } else if (computerNumber === 1 && userInput === "paper") {
    handleWinner();
  } else if (computerNumber === 1 && userInput === "scissors") {
    handleLoser();
  } else if (computerNumber === 2 && userInput === "scissors") {
    handleTie();
  } else if (computerNumber === 2 && userInput === "paper") {
    handleLoser();
  } else if (computerNumber === 2 && userInput === "rock") {
    handleWinner();
  } else if (computerNumber === 3 && userInput === "paper") {
    handleTie();
  } else if (computerNumber === 3 && userInput === "rock") {
    handleLoser();
  } else if (computerNumber === 3 && userInput === "scissors") {
    handleWinner();
  } else {
    $(".result").text(
      "oops... looks like there's a mistake in your input. Try checking the image to make sure you spelled your input correctly. And make sure to use capital letters!"
    );
  }

  // this refreshes the input bar
  $(".input").val("");
});
