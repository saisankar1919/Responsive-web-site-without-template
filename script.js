var firstnamestatus, lastnamestatus,emailstatus,phonestatus,messagestatus;
function firstnamevalid() {
    var name = document.getElementById("fname").value
    var nameerror = document.getElementById("firstnameerror");
    var letters = /^[a-zA-Z-()\s]*$/;
    if (name == "" || name ==null) {
        nameerror.innerHTML = "Field is required...!!!"
        firstnamestatus = false;
    }
    else if (name.match(letters)) {
        nameerror.innerHTML = "";
        firstnamestatus = true;
    }
    else {
        nameerror.innerHTML = "Name is invalid...!!!";
        firstnamestatus = false;
    }
}
function lastnamevalid() {
    var name = document.getElementById("lname").value
    var nameerror = document.getElementById("lastnameerror");
    var letters = /^[a-zA-Z\s]*$/;
    if (name == "" || name == null) {
        nameerror.innerHTML = "Field is required...!!!"
        lastnamestatus = false;
    }
    else if (name.match(letters)) {
        nameerror.innerHTML = "";
        lastnamestatus = true;
    }
    else {
        nameerror.innerHTML = "Name is invalid...!!!";
        lastnamestatus = false;
    }
}
function emailvalid() {
    var email = document.getElementById("email").value
    var emailerror = document.getElementById("emailerror");
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (email == "" || email == null) {
        emailerror.innerHTML = "Filed is required"
        emailstatus = false;
    }
    else if (email.match(letters)) {
        emailerror.innerHTML = "";
        emailstatus = true;
    }
    else {
        emailerror.innerHTML = "invalid email";
        emailstatus = false;
    }

}
function phonevalid() {
    var phone = document.getElementById("phone").value
    var phoneerror = document.getElementById("phoneerror");
    const letters = /^\d{10}$/;
    if (phone == "" || phone == null) {
        phoneerror.innerHTML = "Filed is required...!!!"
        phonestatus = false;
    }
    else if (phone.match(letters)) {
        phoneerror.innerHTML = "";
        phone  = true;
    }
    else {
        phoneerror.innerHTML = "Number is invalid...!!!";
        phonestatus = false;
    }

}

function messagevalid() {
    var message = document.getElementById("message").value
    var messageerror = document.getElementById("messageerror");

    if (message == " " || message ==null) {
        messageerror.innerHTML = "Filed is required...!!!"
        messagestatus = false;
    }


    else {
        messageerror.innerHTML = "";
        messagestatus = true;
    }

}
$("#submit-form").submit((e)=>{
   
    e.preventDefault()
  

    if( msg ==true&& realname==true && email==true && phoneStatus==true){
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycby_ZnPvUREK43swDxC6ucBxp9v1QLirqnrrv18AzgK-R6nCyyI65yya3oQ7AxgHlS3iLA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            
        },
        error:function (err){
            alert("Error")

        }
    })
   }
   else
   {
       alert("Error")
   }
})
