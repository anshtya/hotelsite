function validateForm() {

    var firstname = document.bookingform.firstname.value;
    if (firstname.length < 3) {
        alert("First Name must be at least 3 characters long.");  
        return false; 
    }

    var email = document.bookingform.email.value;
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex_pattern.test(email)) {
        alert('The email address is invalid');
        return false;
    }   

    return true;
}