function validate_input(arg){

	//check if input is empty
	if((arg.length == '' ) ||(arg == null)){
		return Number(1);
	}

	//validate length, should not be less than 4

	if(arg.length <= 4){
		return Number(1);
	}
	return Number(0);
}

function validate_email(email){

}

function validate_passwords(password,conf_pass){
	if(password != conf_pass){
		return Number(1)
	}
}
