$(document).ready(function() {

  $(".row1").children().click(runFun);
  $(".row2").children().click(runFun);
  $(".row3").children().click(runFun);
  $(".row4").children().click(runFun);

});

function runFun(event) {
  var target = event.target.innerHTML;
  var numbers = getNumbers(target);


  switch (target) {
    case "AC":
      return $("#displayText").val("0");
    case "CE":

    case "&":

    case "/":
    return calculate("/");
    case "*":
    return calculate("*");
    case "+":
    return calculate("+");
    case "-":
    return calculate("-");
  }

  if (!isNaN(numbers)) {
    $("#displayText").val(numbers);
    calculate(numbers);
  }
}

function calculate(op, num) {
  console.log(op, num);
}

function getNumbers(target) {
   return parseInt(target);
}
