document.addEventListener("DOMContentLoaded", function () {
    // Get DOM elements
    let usernameInput = document.querySelector(".username");
    let emailInput = document.querySelector(".email");
    let passwordInput = document.querySelector(".password");
    let signUpButton = document.querySelector(".signup-button");
  
    // Add event listener for sign up button click
    signUpButton.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Validate the form fields
      if (validateForm()) {
        // Perform sign up action
        signUpUser(usernameInput.value, emailInput.value, passwordInput.value);
      } else {
        // Display error message or handle invalid form data
        console.log("Invalid form data. Please check your inputs.");
      }
    });
  
    // Function to validate form fields
    function validateForm() {
      // You can implement your validation logic here
      // For a basic example, you can check if the fields are not empty
      if (
        usernameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        passwordInput.value.trim() === ""
      ) {
        return false;
      }
      return true;
    }
  
    // Function to sign up the user
    function signUpUser(username, email, password) {
      // You can perform your sign-up logic here
      // For a basic example, you can console log the user data
      console.log("Signing up user with the following data:");
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      // You can also send this data to your backend for further processing
    }
  });
  
