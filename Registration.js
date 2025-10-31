function validateRegisterForm(e) {

    var firstName = document.getElementById("first_name").value;
    var validationMessage = document.getElementById('validationMessage1');
    // myRegex = "/[a-z][A-Z]"

    if (firstName  === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    } else if (isFinite(firstName )) {
        e.preventDefault();
        validationMessage.textContent = "this field must be characters";
        return false;
    }

    //------------------------------------------------------------------------
    var lastName = document.getElementById("last_name").value;
    var validationMessage = document.getElementById('validationMessage2');
    // myRegex = "/[a-z][A-Z]"

    if (lastName  === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    } else if (isFinite(lastName)) {
        e.preventDefault();
        validationMessage.textContent = "this field must be characters";
        return false;
    }
    //-------------------------------------------------------------------------

    var myRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/im;

    var EmailAddress = document.getElementById("email_address").value;
    var validationMessage = document.getElementById('validationMessage3');

    if (EmailAddress  === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    } else if (isFinite(EmailAddress)) {
        e.preventDefault();
        validationMessage.textContent = "this field must be characters";
        return false;
    }
    else if (myRegex.test(EmailAddress) === false){
        e.preventDefault();
        validationMessage.textContent = "Email should be like example@gmail.com";
        return false;
    }
    

    //------------------------------------------------------------------------------------


    var myRegexpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var Password = document.getElementById("password").value;
    var validationMessage = document.getElementById('validationMessage4');
    if (Password  === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    }
    else if (myRegexpass.test(Password ) === false){
        e.preventDefault();
        validationMessage.textContent = "Password must contain uppercase, lowercase and a number (min 8 chars)";
        return false;
    }
    
    

    //----------------------------------------------------------------------------------------------

    
    var RePassword = document.getElementById("re_password").value;
    var validationMessage = document.getElementById('validationMessage5');
    if (RePassword   === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    }
    else if (RePassword !== Password){
        e.preventDefault();
        validationMessage.textContent = "Passwords must match";
        return false;
    }


    validationMessage.textContent = ""; 

    window.localStorage.setItem("email",EmailAddress);
    window.localStorage.setItem("password",Password);
    

    // console.log(window.localStorage.getItem("email"));
    // console.log(window.localStorage.getItem("password"));

    return true
}



