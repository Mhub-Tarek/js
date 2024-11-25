function convertTemperature() {
    var choice = prompt("Convert to (C)elsius or (F)ahrenheit? Enter C or F:").toUpperCase();
    var temp = Number(prompt("Enter the temperature:"));
  
    if (choice === "C") {
      var celsius = (temp - 32) * (5 / 9);
      document.getElementById("output").innerText = `${temp}°F is ${celsius.toFixed(2)}°C.`;
    } else if (choice === "F") {
      var fahrenheit = (temp * 9 / 5) + 32;
      document.getElementById("output").innerText = `${temp}°C is ${fahrenheit.toFixed(2)}°F.`;
    } else {
      document.getElementById("output").innerText = "Invalid choice.";
    }
  }