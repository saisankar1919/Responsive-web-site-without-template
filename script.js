function firstnamevalid() {
    var name = document.getElementById("fname").value
    var nameerror = document.getElementById("firstnameerror");
    var letters = /^[a-zA-Z\s]*$/;
    if (name == "") {
        nameerror.innerHTML = "Field is required...!!!"
        return false;
    }
    else if (name.match(letters)) {
        nameerror.innerHTML = "";
        return true;
    }
    else {
        nameerror.innerHTML = "Name is invalid...!!!";
        return false;
    }
}
function lastnamevalid() {
    var name = document.getElementById("lname").value
    var nameerror = document.getElementById("lastnameerror");
    var letters = /^[a-zA-Z\s]*$/;
    if (name == "") {
        nameerror.innerHTML = "Field is required...!!!"
        return false;
    }
    else if (name.match(letters)) {
        nameerror.innerHTML = "";
        return true;
    }
    else {
        nameerror.innerHTML = "Name is invalid...!!!";
        return false;
    }
}
function emailvalid() {
    var email = document.getElementById("email").value
    var emailerror = document.getElementById("emailerror");
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (email == "") {
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
    if (phone == "") {
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

function messagevalid() {
    var message = document.getElementById("message").value
    var messageerror = document.getElementById("messageerror");

    if (message == "") {
        messageerror.innerHTML = "Filed is required...!!!"
        return false;
    }


    else {
        messageerror.innerHTML = "";
        return true;
    }

}