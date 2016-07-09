$(document).ready(function() {

  $(".rows").children().click(runFun);

});

var combInput = "";

function runFun(event) {
  var target = event.target.innerHTML;
  var numbers = getNumbers(target);

  evalNoneNums(target);
  evalNums(target, numbers);
}

function evalNoneNums(target) {
  switch (target) {
    case "AC":
    combInput = "";
    return clearText();
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
    if(!isValid(combInput)) return clearText();
    return calculate(combInput);
    case ".":
    combInput += target;
    return $("#displayText").val(combInput);
  }
}

function evalNums(target, numbers) {
  if (!isNaN(numbers)) {
    combInput += target;
    $("#displayText").val(combInput);
  }
}

/*This function checks for a valid operation. First, it has to start with a number, follows by an operator, and lastly a number*/
function isValid(input) {
  var op = /^(\d+[\+\-\*\/%\.]{1})+\d+$/gm;
  return op.test(input) ;
}

function clearText(){
  combInput = "";
  $("#displayText").val("0");
}

function calculate(eva) {
  var result = eval(eva);
  return $("#displayText").val(result);
}

function getNumbers(target) {
  return parseInt(target);
}
