

// if (computerChoice === 1 && userChoice === 2) {
// computer wins
//}

// y = 3*x + 1
// x is always between 0 - 1
// 3(0) + 1 = 1
// 3(1) + 1 = 4

let globalNumber = 0;
$(".play").click(function() {
  let computerNumber;
  computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  // "computer choice"
  $(".computerChoice").text(`computer choice is ${computerNumber}`);

  let userInput = $(".input").val();
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
  // Id suggest just worrying about "rock" or "Rock" to start with! then you can worry about upper / lowercase!
  // also, will computerChoice ever be === to "Rock"? above we were checking it was 1, 2, or 3 right?

  // one tip – "format this file" up top to make it clearer what is included in the "play" click handler
  
  // another thing – we can probably combine the two click handlers right? we probably don't need the first one anymore because we have this one now right?
  // it might just make it more confusing

  //which click handler
  
  // the one on lines 1 through 5! yup!
  
  // nice! seeems like it's working?
  if (computerNumber === 1 && userInput === "Rock") {
    $(".result").text("It's a tie!");
    $(".result").css('color', 'orange');
  }
  
  if (computerNumber === 1 && userInput === "Paper"){
    $(".result").text("You win!");
  }
  
  if (computerNumber === 1 && userInput === "Scissors") {
    $(".result").text("You lose. Try again!")
  }
  
  
    if (computerNumber === 2 && userInput === "Scissors") {
    $(".result").text("It's a tie!");
  }
    if (computerNumber === 2 && userInput === "Paper"){
    $(".result").text("You lose. Try again!");
  }
    if (computerNumber === 2 && userInput === "Rock") {
    $(".result").text("You win!")
  }
  
  
      if (computerNumber === 3 && userInput === "Paper") {
    $(".result").text("It's a tie!");
  }
      if (computerNumber === 3 && userInput === "Rock"){
    $(".result").text("You lose. Try again!");
  }
      if (computerNumber === 3 && userInput === "Scissors") {
    $(".result").text("You win!")
  }
  
else{
  $(".result").text("oops... looks like there's a mistake in your input. Try checking the image to make sure you spelled your input correctly. And make sure to use capital letters!")
}
  // we'll keep working on the else next week! I think the issue is the else will only apply to the if statement it's connected to
  // so the one directly above.
  // we probably need to link the if statements if we want the else to work! 
  
});

