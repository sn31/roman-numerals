//back-end


//front-end
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = converter(input);
    $("#decimalResult").text(result);
  })
});
