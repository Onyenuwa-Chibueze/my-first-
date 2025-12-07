const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (name === "" || email === "" || password === "") {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    errorMsg.textContent = "Enter a valid email!";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters!";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully 🎉";
});