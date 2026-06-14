// Verify JavaScript is working
document.addEventListener("DOMContentLoaded", function () {
  // Home page: test button
  var testBtn = document.getElementById("testBtn");
  if (testBtn) {
    testBtn.addEventListener("click", function () {
      var result = document.getElementById("result");
      result.textContent = "JavaScript is working!";
    });
  }
});

// Contact form handler
function handleSubmit(event) {
  event.preventDefault();
  var result = document.getElementById("formResult");
  result.textContent = "Form submitted successfully! (This is a demo — no data is sent.)";
  result.classList.remove("hidden");
  document.getElementById("contactForm").reset();
}
