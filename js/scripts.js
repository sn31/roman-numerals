//back-end

var romanNumber = {
  "I": 1,
  "IV": 4,
  "V": 5,
  "IX": 9,
  "X": 10,
  "XL": 40,
  "L": 50,
  "XC": 90,
  "C": 100,
  "CD": 400,
  "D": 500,
  "CM": 900,
  "M": 1000,
}

var romanFindMod = function (input) {
  if (input < 1 || input > 3999) {
    alert("Please enter a number between 1 and 3999!");
  }
  else {
    var result = "";
    for (var i of Object.keys(romanNumber).reverse()) {
      var quotient = Math.floor(input / romanNumber[i]);
      input -= quotient * (romanNumber)[i];
      for (var j = 0; j < quotient; j++) {
        result += i;
      }
    }
  }

  return result;
}

//front-end
$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    var input = parseInt($("#inputNumber").val());
    $("#resultNumber").empty();
    $("#resultNumber").append(romanFindMod(input));
  })
});
