$(".play").click(function(){
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);
  // alert("hi");
});

// y = 3*x + 1
// x is always between 0 - 1
// 3(0) + 1 = 1
// 3(1) + 1 = 4
let rock = 1;
let scissors = 2;
let paper = 3;



let globalNumber = 0;
$(".play").click(function(){
  let computerNumber;
  computerNumber = Math.random()*3;
  computerNumber = Math.ceil(computerNumber);
  // "computer choice"
  $(".computerChoice").text(`computer choice is ${computerNumber}`);

});


