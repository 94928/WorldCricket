function validateForm(){

    //Check data is present -	

    if (document.myForm.fname.value =="")

    {alert("Enter a first name");		     

    return false;

    }

    //Check the length of data -

    if (document.myForm.phone.value.length !== 10){

        alert("This is not a valid phonenumber");

        return false;

    }

    

    //Check the range

    if (document.myForm.age.value < 18){

        alert("You must be over 18 to continue");

        return false;

    }



}