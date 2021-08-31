import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import convertToRoman from './scripts.js';

// UI Logic
$(document).ready(function () {
  $("form#convert").submit(function (event) {
    event.preventDefault();
    const value = $("#number").val();
    $("#result").html(convertToRoman(value));
  });
});

// Additional way to convert:
// var romanNumeralConverter = [
//   [1000, 'M'],
//   [900, 'CM'],
//   [500, 'D'],
//   [400, 'CD'],
//   [100, 'C'],
//   [90, 'XC'],
//   [50, 'L'],
//   [40, 'XL'],
//   [10, 'X'],
//   [9, 'IX'],
//   [5, 'V'],
//   [4, 'IV'],
//   [1, 'I']
// ];

// function convertToRoman(num) {
//   if (num === 0) {
//     return '';
//   }
//   for (var i = 0; i < romanNumeralConverter.length; i++) {
//     if (num >= romanNumeralConverter[i][0]) {
//       return romanNumeralConverter[i][1] + convertToRoman(num - romanNumeralConverter[i][0]);
//     }
//   }
// }