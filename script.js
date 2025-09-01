// ==============================
// Part 1: Variables & Conditionals
// ==============================
document.getElementById("weather-btn").addEventListener("click", function () {
  let temp = prompt("Enter the current temperature in °C:");
  temp = Number(temp);

  let result = "";
  if (temp < 15) {
    result = "❄️ It's cold outside!";
  } else if (temp >= 15 && temp < 30) {
    result = "🌤️ The weather is nice.";
  } else {
    result = "🔥 It's really hot!";
  }

  document.getElementById("weather-result").textContent = result;
});

// ==============================
// Part 2: Functions
// ==============================

// Function 1: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function 2: Greeting
function greetUser(name) {
  return `Hello, ${name}!`;
}

document.getElementById("convert-btn").addEventListener("click", function () {
  let celsius = 25;
  let fahrenheit = celsiusToFahrenheit(celsius);
  document.getElementById("convert-result").textContent = 
    `${greetUser("Coder")} ${celsius}°C is ${fahrenheit}°F.`;
});

// ==============================
// Part 3: Loops
// ==============================
document.getElementById("show-names-btn").addEventListener("click", function () {
  const names = ["Alice", "Bob", "Charlie", "Diana"];
  const list = document.getElementById("name-list");
  list.innerHTML = "";

  // forEach loop
  names.forEach(name => {
    let li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });

  // for loop (add numbers)
  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
});

// ==============================
// Part 4: DOM Manipulation
// ==============================

// 1. Highlight text
document.getElementById("highlight-btn").addEventListener("click", function () {
  document.getElementById("sample-text").classList.toggle("highlight");
});

// 2. Hide/Show paragraph
document.getElementById("hide-show-btn").addEventListener("click", function () {
  const text = document.getElementById("sample-text");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

// 3. Create new box
document.getElementById("create-box-btn").addEventListener("click", function () {
  const box = document.createElement("div");
  box.classList.add("box");
  document.getElementById("box-container").appendChild(box);
});
