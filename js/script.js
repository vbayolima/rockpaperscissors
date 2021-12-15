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

function getRandomComputerChoice() {
  let computerNumber;
  computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  
  //computer choice
  $(".computerChoice").text(`computer choice is ${computerNumber}`);
  
  if (computerNumber === 1) {
    $(".computerChoice").text("Rock");
  }
  else if (computerNumber === 2) {
    $(".computerChoice").text("Scissors");
  }
  else if (computerNumber === 3) {
    $(".computerChoice").text("Paper");
  }
  
  return computerNumber;
}



let globalNumber = 0;
$(".play").click(function() {

  let userInput = $(".input").val();
  userInput = userInput.toLowerCase();

  $(".userChoice").text(userInput);
  
  let computerAnswer= getRandomComputerChoice();


  if (computerAnswer === 1 && userInput == "rock") {
      handleTie();
  } else if (computerAnswer === 1 && userInput === "paper") {
      handleWinner();
  } else if (computerAnswer === 1 && userInput === "scissors") {
      handleLoser();
  } else if (computerAnswer === 2 && userInput === "scissors") {
      handleTie();
  } else if (computerAnswer === 2 && userInput === "paper") {
      handleLoser();
  } else if (computerAnswer === 2 && userInput === "rock") {
      handleWinner();
  } else if (computerAnswer === 3 && userInput === "paper") {
      handleTie();
  } else if (computerAnswer === 3 && userInput === "rock") {
      handleLoser();
  } else if (computerAnswer === 3 && userInput === "scissors") {
      handleWinner();
  } else {
      $(".result").text(
      "oops... looks like there's a mistake in your input. Try checking the image to make sure you spelled your input correctly. And make sure to use capital letters!"
    );
  }

  // this refreshes the input bar
  $(".input").val("");
});
