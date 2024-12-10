const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isFormValid = true;
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        isFormValid = false;
      }
    });
    if (isFormValid) {
      alert("Form submitted successfully!");
      form.reset();
      inputs.forEach((input) => clearError(input));
    }
  });
});
function validateInput(input) {
  let isValid = true;
  const errorSpan = input.nextElementSibling;
  if (!input.value.trim()) {
    showError(input, `${input.placeholder} is required.`);
    isValid = false;
  } else if (input.type === "email" && !isValidEmail(input.value)) {
    showError(input, "Please enter a valid email address.");
    isValid = false;
  } else if (input.id === "confirmPassword") {
    const password = document.getElementById("registerPassword").value;
    if (input.value !== password) {
      showError(input, "Passwords do not match.");
      isValid = false;
    } else {
      clearError(input);
    }
  } else {
    clearError(input);
  }
  return isValid;
}
function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  input.classList.add("error");
  if (errorSpan) {
    errorSpan.textContent = message;
    errorSpan.style.display = "block";
  }
}
function clearError(input) {
  const errorSpan = input.nextElementSibling;
  input.classList.remove("error");
  if (errorSpan) {
    errorSpan.textContent = "";
    errorSpan.style.display = "none";
  }
}
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
