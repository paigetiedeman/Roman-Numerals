// Business Logic

function convertToRoman(num) {
  var roman = "";

  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (i = 0; i < values.length; i++) {
    if (num >= values[i]) {
      if (5 <= num && num <= 8) num -= 5;
      else if (1 <= num && num <= 3) num -= 1;
      else num -= values[i];
      roman += numerals[i];
      i--;
    }
  }

  return roman;
}

// UI Logic
$(document).ready(function () {
  $("form#convert").submit(function (event) {
    event.preventDefault();
    const value = $("#number").val();
    $("#result").html(convertToRoman(value));
  });
});