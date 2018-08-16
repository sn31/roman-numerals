//back-end

var romanNumber = {
  "I": 1,
  "IV": 4,
  "V": 5,
  "IX":9,
  "X": 10,
  "XL": 40,
  "L": 50,
  "XC": 90,
  "C": 100,
  "CD":400,
  "D": 500,
  "CM":900,
  "M": 1000,
}

var romanFindMod = function (input) {
  
  var result = "";
  for (var i of Object.keys(romanNumber).reverse()) {
    var quotient = Math.floor(input / (romanNumber)[i]);
    console.log(i);
    console.log("this is the quotient");
    console.log(quotient);
    input -= quotient * (romanNumber)[i];
    for (var j = 0; j< quotient;j ++) {
      result += i;
    }
  }
  return result;
}

//front-end
$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    var input = parseInt($("#inputNumber").val());
    console.log(input);
    console.log(romanFindMod(input));

    // var result = RomanConverter(input);
    $("#resultNumber").empty();
    $("#resultNumber").append(romanFindMod(input));
  })
});
