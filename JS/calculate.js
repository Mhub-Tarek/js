function calculate() {
  var num1 = Number(prompt("Enter the first number:"));
  var num2 = Number(prompt("Enter the second number:"));

  if (!isNaN(num1) && !isNaN(num2)) {
    var product = num1 * num2;
    var division = num1 / num2;
    document.getElementById("output").innerText = 
      `Product: ${product.toFixed(2)}, Division: ${division.toFixed(2)}`;
  } else {
    document.getElementById("output").innerText = "Invalid input.";
  }
}