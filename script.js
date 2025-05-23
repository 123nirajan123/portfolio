// script.js

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Prepare form data using your Google Form field IDs
  const formData = new FormData();
  formData.append("entry.726004286", name);       // Name field
  formData.append("entry.959984559", email);      // Email field
  formData.append("entry.1349579672", message);   // Message field

  // Send data to your Google Form
  fetch("https://docs.google.com/forms/d/e/1FAIpQLSf_NYAJ9lmx-i2LSj2eH5Plv0BxUmiEG8qPiVTcHl_Jh91pTw/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
  .then(() => {
    // Show confirmation message
    document.getElementById('formMessage').textContent = "✅ Message sent successfully!";
    document.getElementById('contactForm').reset();
  })
  .catch(() => {
    // Handle error (rare with no-cors)
    document.getElementById('formMessage').textContent = "❌ There was an error. Please try again.";
  });
});

