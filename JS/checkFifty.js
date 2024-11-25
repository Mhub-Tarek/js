function checkFifty() {
    var num1 = Number(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));
  
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
      document.getElementById("output").innerText = "True: One number is 50 or their sum is 50.";
    } else {
      document.getElementById("output").innerText = "False: Neither condition is met.";
    }
  }
  