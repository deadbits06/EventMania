	$(document).ready(function(){
		// validate the modal form
		$("#volunteer_reg").validate({
			errorClass: "errors",

			rules: {

				fname: "required",
				lname: "required",
				email: {
					required: true,
					email: true
				},
				contactNo: {
					required: true,
					minlength: 10
				},
				city: {
					required: true
				},
				qualification: {
					required: true
				},
				field_of_interest: {
					required: true
				},
				password: {
					required: true,
					minlength: 2
				},
				cpassword: {
					required:true,
					minlength:2,
					equalTo: "#password"
				}

			},

			messages: {

				fname: "Please Enter first Name",
				lname: "Please Enter last Name",
				contactNo: {
					required: "Please select any one",
					minlength: "Phone number should be atleast 10 digit"
				},
				city: {
					required: "Please Enter the city name"
				},
				qualification: {
					required: "Please enter the qualification"
				},
				field_of_interest: {
					required: "Please select your field of interest"
				},
				password: {
					required: "Please Enter a password",
					minlength: "Password should be minimum of 2 charater"
				},
				cpassword: {
					required: "Please Enter a password",
					minlength: "Password should be minimum of 2 charater",
					equalTo: "Your password doesn't matched"
				}

			}
		});
	});