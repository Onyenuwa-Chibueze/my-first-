const greetBtn = document.getElementById("greetBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const studentInput = document.getElementById("studentInput");
const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");

function greetStudents() {
  const names = studentInput.value.split(",").map((name) => name.trim());

  if (names.length === 0 || studentInput.value === "") {
    alert("Please enter at least one student name!");
    return;
  }
  output.innerHTML = "<h3>👋 Greetings:</h3>";

  for (let i = 0; i < names.length; i++) {
    const p = document.createElement("p");

    p.textContent = `Hello ${names[i]}! "Welcome to JavaScript class 🎉";`
    output.appendChild(p);
  }
}

function showMultiplicationTable() {
  const number = Number(numberInput.value);

  if (isNaN(number) || number === 0) {
    alert("Please input a valid Number");
    return;
  }

  output.innerHTML = <h3> Multiplication Table for ${number}</h3>;

  const tableDiv = document.createElement("div");
  tableDiv.classList.add("table");

  for (let i = 1; i <= 12; i++) {
    const line = document.createElement("p");
    line.textContent = `${number} x ${i} = ${number * i};`
    tableDiv.appendChild(line);
  }

  output.appendChild(tableDiv);
}

greetBtn.addEventListener("click", greetStudents);
multiplyBtn.addEventListener("click", showMultiplicationTable);