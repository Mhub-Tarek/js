function checkLeapYear() {
    var year = Number(prompt("Enter a year:"));
  
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      document.getElementById("output").innerText = `${year} is a leap year.`;
    } else {
      document.getElementById("output").innerText = `${year} is not a leap year.`;
    }
  }
  