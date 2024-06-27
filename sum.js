var sum;
var input;

do {
  var num;

  do {
    num = parseInt(prompt("Enter a num from 1 to 100:"));

    // Validate the input
    while (isNaN(num) || num < 1 || num > 100) {
      alert("Please enter a num between 1 and 100.");
      num = parseInt(prompt("Enter a num from 1 to 100:"));
    }

    // Calculate the sum using a for loop
    sum = 0;
    for (var i = 1; i <= num; i++) {
      sum += i;
    }

    // Display the sum
    alert("The sum of nums from 1 to " + num + " is: " + sum);
  } while (isNaN(num) || num < 1 || num > 100);

  // ask the user if they want to enter another number
  input = prompt("Do you want to enter another num? \n(Enter y to continue.)");
} while (input === "y" || input === "Y");

alert("Thank you for using the Sum calculator. Goodbye!");
