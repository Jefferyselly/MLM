/******* VALIDATE SIGNUP FORM  *******/

//Set an event listener for the submit button

var submit_btn = document.querySelector('#create_account');

submit_btn.addEventListener('click',

function validateSignUp(e){
	err_count = 0;

	//first validate all inputs with default mapping

	validate_input(document.querySelector('#full_name').value, document.querySelector('#display_error'),e,'Full name');

	validate_input(document.querySelector('#user_name').value, document.querySelector('#display_error'),e, 'Username');

	validate_input(document.querySelector('#password').value, document.querySelector('#display_error'),e, 'password');

	validate_input(document.querySelector('#conf_pass').value, document.querySelector('#display_error'),e, 'Confirm Password');

	validate_email(document.querySelector('#email').value, document.querySelector('#display_error'),e, 'Email');

	validate_passwords(document.querySelector('#password').value,document.querySelector('#conf_pass').value,document.querySelector('#display_error'),e)
});

