function validateForm() {

    var email = document.signInform.email.value;
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex_pattern.test(email)) {
        alert('The email address is invalid');
        return false;
    }
       
    var password = document.signInform.password.value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");  
        return false;  
    }

    return true;
}