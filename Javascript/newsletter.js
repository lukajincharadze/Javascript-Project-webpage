let newsletter_input = document.getElementById('newsletter_input');
let newsletter_send = document.getElementById('newsletter_send');

newsletter_send.addEventListener('click', function(event) {
  if (newsletter_input.value !== '') {
    event.target.closest('form').submit();
    console.log('Value is not empty');
  } else {
    event.preventDefault();
    console.log('Value is empty');
  }
});

