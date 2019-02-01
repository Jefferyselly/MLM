/******* VALIDATE SIGNUP FORM  *******/

//Set an event listener for the submit button

var submit_btn = document.querySelector('#create_account');

submit_btn.addEventListener('click', validateSignUp);

function validateSignUp(e){

	var error_count = 0

	var error_msg = [];

	var full_name = document.querySelector('#full_name').value;

	var username = document.querySelector('#user_name').value;

	var email = document.querySelector('#email').value;

	var password = document.querySelector('#password').value;

	var conf_pass = document.querySelector('#conf_pass').value;

	var display_errors = document.querySelector('#display_error');

	if(validate_input(full_name) == 1){
		error_count++;
		error_msg.push('Error in Full name');
	}

	if(validate_input(username) == 1){
		error_count++;
		error_msg.push('Error in Username');
	}

	if(validate_input(email) == 1){
		error_count++;
		error_msg.push('Error in Emails');
	}
	
	

	if(error_count > 0){

		e.preventDefault();
		for(var i = 0; i < error_msg.length; i++){
			

			$('#display_error').html(error_msg[i])
		}
	}
}