// Function to validate the email address
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  
function validatePassword(password) {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    return (
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password) &&
      digitRegex.test(password)
    );
}
  
let formElement = document.getElementById("registration");
  
formElement.addEventListener("submit", function(event) {
    event.preventDefault();
  
    let errors = {};
  
    let form = event.target;
  
    let username = form.querySelector('[name="username"]').value;
  
    if (username === "") {
      errors.username = "Enter your Email";
    } else if (!validateEmail(username)) {
      errors.username = "Invalid email format";
    }
  
    let password = form.querySelector('[name="password"]').value;
    let password2 = form.querySelector('[name="password2"]').value;
  
    if (password.length < 8) {
      errors.password = "Should be at least 8 characters long";
    } else if (!validatePassword(password)) {
      errors.password = "At least one uppercase letter, digit and lowercase letter, ";
    }
  
    if (password !== password2) {
      errors.password2 = "Passwords don't match";
    }
  
    for (let item in errors) {
      let errorPlaceholder = document.getElementById("error_" + item);
  
      if (errorPlaceholder) {
        errorPlaceholder.textContent = errors[item];
      }
    }
  
 
    if (Object.keys(errors).length === 0) {
      console.log("Submitting form...");
      form.submit();
    } else {
      console.log("Form has errors. Not submitting.");
    }
  });


  let usernameInput = document.getElementById('user');
  let errorUsername = document.getElementById('error_username');
  errorUsername.classList.add('error_username');
  let passwordInput = document.getElementById('mypassword');
  let passwordInput2 = document.getElementById('mypassword2');
  let errorPassword = document.getElementById('error_password');
  errorPassword.classList.add('error_password');
  let errorPassword2 = document.getElementById('error_password2');
  errorPassword2.classList.add('error_password2');

  
  usernameInput.addEventListener('input', function() {
    errorUsername.textContent = '';
  });
  
  passwordInput.addEventListener('input', function() {
    errorPassword.textContent = '';
  });
  
  passwordInput2.addEventListener('input', function() {
    errorPassword2.textContent = '';
  });

