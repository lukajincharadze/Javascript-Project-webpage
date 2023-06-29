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

