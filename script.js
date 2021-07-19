
function firstnamevalid() {
    var name = document.getElementById("fname").value
    
    var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    if (name == "") {
        document.getElementById("firstnameerror").innerHTML = "This field is required"
        
        return false;
    }
    else if (letters.test(name)) {
        document.getElementById("firstnameerror").innerHTML = ""
        return true;
    }
    else {
        document.getElementById("firstnameerror").innerHTML = "This field is required"
       return false;
    }
}
function lastnamevalid() {
    var lname = document.getElementById("lname").value
    
    var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    if (lname == "") {
        document.getElementById("lastnameerror").innerHTML = "This field is required"
        
        return false;
    }
    else if (letters.test(lname)) {
        document.getElementById("lastnameerror").innerHTML = ""
        return true;
    }
    else {
        document.getElementById("lastnameerror").innerHTML = "This field is required"
        return false;
    }
}
function emailvalid() {
    var email = document.getElementById("email").value
    var emailerror = document.getElementById("emailerror");
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (email == "" || email == null) {
        emailerror.innerHTML = "Filed is required"
        return false;
    }
    else if (email.match(letters)) {
        emailerror.innerHTML = "";
        return true;
    }
    else {
        emailerror.innerHTML = "invalid email";
        return false;
    }

}
function phonevalid() {
    var phone = document.getElementById("phone").value
    var phoneerror = document.getElementById("phoneerror");
    const letters = /^\d{10}$/;
    if (phone == "" || phone == null) {
        phoneerror.innerHTML = "Filed is required...!!!"
        return false;
    }
    else if (phone.match(letters)) {
        phoneerror.innerHTML = "";
        return true;
    }
    else {
        phoneerror.innerHTML = "Number is invalid...!!!";
        return false;
    }

}



