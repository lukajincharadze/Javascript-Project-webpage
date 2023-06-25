// // FORM VALIDATION

// document.getElementById("registration").addEventListener("submit", function(event){
//     event.preventDefault();

//     let errors = {};

//     let form = event.target;

//     // username
//     let username = form.querySelector('[name = "username"]').value;
    
//     if(username.length < 4) {
//         errors.username = "Min 4 letters";
//     }

//     if(username == ""){
//         errors.username = "Please enter Your Username";
//     }

//     // password
//     let password = form.querySelector('[name = "password"]').value;
//     let password2 = form.querySelector('[name = "password2"]').value;

//     if (password.length < 5) {
//         errors.password = "Invalid Password";
//     }

//     if (password != password2) {
//         errors.password2 = "Passwords don't match";
//     }


//     // errors
//     for (let item in errors) {

//         let errorPlaceholder = document.getElementById("error_" + item);

//         // if error happends
//         if(errorPlaceholder) {
//             errorPlaceholder.textContent = errors[item];
//         }
//     }
//     if(Object.keys(errors).length == 0) {
//         form.submit();
//     }
// })

// // Password SHOW/HIDE
// function togglePasswordVisibility() {
//     var passwordInput = document.getElementById("mypassword");
//     var showPasswordIcon = document.getElementById("togglePassword");
  
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         showPasswordIcon.innerHTML = "&#x1f441;";
//     } else {
//         passwordInput.type = "password";
//         showPasswordIcon.innerHTML = "&#xf070;";
//     }
// }

// togglePasswordVisibility() 


// // END FORM VALIDATION





// BURGER MENU
let navigation2 = document.querySelector(".navigation2");
let navigation = document.querySelector(".navigation");
let navigationbg = document.querySelector(".navigation2bg");
let burger = document.querySelector(".container");
let nav_wraper = document.querySelector(".nav_wraper");


burger.addEventListener("click", function() {
    navigation2.classList.toggle("active");
    navigation.classList.toggle("active");
    navigationbg.classList.toggle("active");
    nav_wraper.classList.toggle("active");
    burger.classList.toggle("change");
})
