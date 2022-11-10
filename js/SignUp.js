function validateForm() {

    var firstname = document.signUpform.firstname.value;
    if (firstname.length < 3) {
        alert("First Name must be at least 3 characters long.");  
        return false; 
    }

    var email = document.signUpform.email.value;
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex_pattern.test(email)) {
        alert('The email address is invalid');
        return false;
    }
       
    var password = document.signUpform.password.value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");  
        return false;  
    }

    return true;
}