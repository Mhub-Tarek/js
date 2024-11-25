function triangleArea() {
    var a = Number(prompt("Enter side A:"));
    var b = Number(prompt("Enter side B:"));
    var c = Number(prompt("Enter side C:"));
  
    if (a + b > c && a + c > b && b + c > a) {
      var s = (a + b + c) / 2;
      var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      document.getElementById("output").innerText = `Area: ${area.toFixed(2)} square units.`;
    } else {
      document.getElementById("output").innerText = "Invalid triangle sides.";
    }
  }