// The current combination:
var dial1 = 5;
var dial2 = 6;
var dial3 = 2;

$('button')
  .on('click', function() {
    // Increase the number on the dial

    $(this).text((parseInt($(this).text()) + 1) % 10);
    // Check the combination
    checkcombo();
  });

var checkcombo = function() {
  // Each time a button is clicked, check the combo:
  // If no number are correct, the background should be #d27666
  // If any one number is correct, the background should be #e69458

  // if any two numbers are correct, the background should be #e3cb67
  // If any three numbers are correct, the background should be #bcdd4e

var a = $('.one').text();
var b = $('.two').text();
var c = $('.three').text();



// THREE Correct
if ((a == dial1) && (b == dial2) && (c == dial3)) {
  $('body').css('background-color', '#bcdd4e');
}

//ANY two
else if ((a == dial1 && b == dial2) || (b == dial2 && c == dial3) || (a == dial1 && c == dial3)){
  $('body').css('background', '#e3cb67');
}

//ANy one
else if ((a == dial1) || (b == dial2) || (c == dial3)) {
  $('body').css('background', '#e69458');
}

//None

else if ((a != dial1) && (b != dial2) && (c !== dial3)) {
  $('body').css('background', '#d27666');
}

};