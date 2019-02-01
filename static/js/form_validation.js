var p = document.createElement('p'); // Create Paragraph node for storing individual errors

function validate_input(arg,errDisplay,e,fieldName){

	//check if input is empty
	if((arg.length == '' ) ||(arg == null)){
		
		//Display the error
		e.preventDefault();
		errDisplay.innerHTML = 'Empty fields present'

	}

	//validate length, should not be less than 4

	
	
	
}

function validate_email(email,errDisplay,e,fieldName){
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email = re.test(email);
	if(!is_email){
		//Display Error
		e.preventDefault();

		p.appendChild(document.createTextNode('Invalid mail'));
		errDisplay.appendChild(p);
	}

}

function validate_passwords(password,conf_pass,errDisplay,e){
	if(password != conf_pass){
		
		//Display error
		e.preventDefault();

		p.appendChild(document.createTextNode('Passwords do not match'));

		errDisplay.appendChild(p);
	}
}
