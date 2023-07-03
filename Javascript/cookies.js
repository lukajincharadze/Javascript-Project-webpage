var form = document.getElementById('registration');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var username = document.getElementById('user').value;
  var password = document.getElementById('mypassword').value;
  var password2 = document.getElementById('mypassword2').value;

  var formData = {
    username: username,
    password: password,
    password2: password2
  };

  localStorage.setItem('formData', JSON.stringify(formData));

  // Set the expiration date to 1 week from now
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  localStorage.setItem('expirationDate', expirationDate.toISOString());

  console.log('Form data:', formData);

  form.reset();
});

var storedExpirationDate = localStorage.getItem('expirationDate');
if (storedExpirationDate) {
  var expirationDate = new Date(storedExpirationDate);
  var currentDate = new Date();
  if (currentDate > expirationDate) {
    localStorage.removeItem('formData');
    localStorage.removeItem('expirationDate');
  }
}

var storedFormData = localStorage.getItem('formData');
if (storedFormData) {
  var formData = JSON.parse(storedFormData);
  console.log('Existing form data:', formData);
}
