const registerPass = document.getElementById("registerPassword");
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("error");
    const errorSpan = input.nextElementSibling;
    errorSpan.style.display = "none";
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorSpan.textContent = `${input.placeholder} is required.`;
      errorSpan.style.display = "block";
      isValid = false;
    } else if (input.id === "loginEmail" || input.id === "registerEmail") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        input.classList.add("error");
        errorSpan.textContent = "Please enter a valid email address.";
        errorSpan.style.display = "block";
        isValid = false;
      }
    } else if (input.id === "confirmPassword") {
      if (input.value !== registerPass.value) {
        input.classList.add("error");
        errorSpan.textContent = "Passwords do not match.";
        errorSpan.style.display = "block";
        isValid = false;
      }
    }
  });
  return isValid;
}
const fiorm = document.getElementById("fiorm");
fiorm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm(fiorm);
});
