function checkMultiple() {
    var num = Number(prompt("Enter a positive number:"));
  
    if (num > 0 && (num % 3 === 0 || num % 7 === 0)) {
      document.getElementById("output").innerText = `${num} is a multiple of 3 or 7.`;
    } else {
      document.getElementById("output").innerText = `${num} is not a multiple of 3 or 7.`;
    }
  }
  