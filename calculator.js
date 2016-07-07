$(document).ready(function() {

  $(".row1").children().click(runFun);
  $(".row2").children().click(runFun);
  $(".row3").children().click(runFun);
  $(".row4").children().click(runFun);

});

var combInput = "";

function runFun(event) {
  var target = event.target.innerHTML;
  var numbers = getNumbers(target);



  switch (target) {
    case "AC":
      combInput = "";
      return $("#displayText").val("0");
    case "CE":
      return;
    case "%":
      combInput += target;
      return $("#displayText").val(combInput);
    case "/":
      combInput += target;
      return $("#displayText").val(combInput);
    case "*":
      combInput += target;
      return $("#displayText").val(combInput);
    case "+":
       combInput += target;
      return $("#displayText").val(combInput);
    case "-":
      combInput += target;
      return $("#displayText").val(combInput);
    case "=":
      return calculate(combInput);
    case ".":
      combInput += target;
      return $("#displayText").val(combInput);
  }

  if (!isNaN(numbers)) {
    combInput += target;
    $("#displayText").val(combInput);
  }
}

function calculate(eve) {
  var result = eval(eve);
  return $("#displayText").val(result);
}

function getNumbers(target) {
   return parseInt(target);
}
