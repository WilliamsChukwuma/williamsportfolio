document.querySelector('button').addEventListener('click', () => {
    // Add interactive behavior here
});

// CONTACT.HTML
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Form validation logic goes here
    // You can use JavaScript to validate form fields before submission
    // Example: check if name, email, and message fields are not empty
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // If all fields are filled, you can submit the form via AJAX or perform other actions
    // For demonstration purposes, we'll just log the form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Clear the form fields after submission
    document.getElementById("contactForm").reset();
  });