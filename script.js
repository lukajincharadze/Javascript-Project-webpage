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
      errors.password = "Password should be at least 8 characters long";
    } else if (!validatePassword(password)) {
      errors.password = "At least one lowercase letter, uppercase letter, and digit";
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
  
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("mypassword");
    var showPasswordIcon = document.getElementById("togglePassword");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordIcon.innerHTML = "&#x1f441;";
    } else {
      passwordInput.type = "password";
      showPasswordIcon.innerHTML = "&#xf070;";
    }
}
  
  togglePasswordVisibility();
  
  let usernameInput = document.getElementById('user');
  let errorUsername = document.getElementById('error_username');
  let passwordInput = document.getElementById('mypassword');
  let passwordInput2 = document.getElementById('mypassword2');
  let errorPassword = document.getElementById('error_password');
  let errorPassword2 = document.getElementById('error_password2');
  
  usernameInput.addEventListener('input', function() {
    errorUsername.textContent = '';
  });
  
  passwordInput.addEventListener('input', function() {
    errorPassword.textContent = '';
  });
  
  passwordInput2.addEventListener('input', function() {
    errorPassword2.textContent = '';
  });
  

// BURGER MENU
let navigation2 = document.querySelector(".navigation2");
let navigation = document.querySelector(".navigation");
let navblog = document.querySelector(".nav_blog");
let nav_logo = document.querySelector(".nav_logo");
let navigationbg = document.querySelector(".navigation2bg");
let burger = document.querySelector(".container");
let nav_wraper = document.querySelector(".nav_wraper");
let circle_img = document.querySelector(".circle_div2");

burger.addEventListener("click", function() {
    circle_img.classList.toggle("active");
    navigation2.classList.toggle("active");
    navblog.classList.toggle("active");
    nav_logo.classList.toggle("active");
    navigation.classList.toggle("active");
    navigationbg.classList.toggle("active");
    nav_wraper.classList.toggle("active");
    burger.classList.toggle("change");
});