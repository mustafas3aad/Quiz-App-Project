function validateForm(e) {

    var ReservedEmail = window.localStorage.getItem("email");
    var Reservedpassword = window.localStorage.getItem("password");

    console.log(ReservedEmail,Reservedpassword);

    var EmailAddress = document.getElementById("email_address").value;
    var Password = document.getElementById("password").value;
    var validationMessage = document.getElementById('validationMessage6');



    if (!ReservedEmail || !Reservedpassword) {
    validationMessage.textContent = "No account found!";
    e.preventDefault();
    return false;
    }


    if (EmailAddress  === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    } 
    else if(ReservedEmail !==EmailAddress ){
        e.preventDefault();
        validationMessage.textContent = "Email or Password is Invallid";
        return false;

    }
    //------------------------------------------------------------------------------------
    if (Password  === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    }
    else if (Reservedpassword !== Password){
            e.preventDefault();
            validationMessage.textContent = "Email or Password is Invallid";
                    return false;
    }

    //----------------------------------------------------------------------------------------------

    validationMessage.textContent = "";
    return true

}
