document.getElementById("registration").addEventListener("submit", function(event){
    event.preventDefault();

    let errors = {};

    let form = event.target;

    // username
    let username = form.querySelector('[name = "username"]').value;
    
    if(username.length < 4) {
        errors.username = "Min 4 letters";
    }

    if(username == ""){
        errors.username = "Please enter Your Username";
    }

    // password
    let password = form.querySelector('[name = "password"]').value;
    let password2 = form.querySelector('[name = "password2"]').value;

    if (password.length < 5) {
        errors.password = "Invalid Password";
    }

    if (password != password2) {
        errors.password2 = "Passwords don't match";
    }


    // errors
    for (let item in errors) {

        let errorPlaceholder = document.getElementById("error_" + item);

        // if error happends
        if(errorPlaceholder) {
            errorPlaceholder.textContent = errors[item];
        }
    }
    if(Object.keys(errors).length == 0) {
        form.submit();
    }
})

// Password SHOW/HIDE
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

togglePasswordVisibility() 
