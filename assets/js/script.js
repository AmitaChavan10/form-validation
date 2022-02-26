/* Author: 
*/

const form = document.getElementById('form');
const user = document.getElementById('username');
const email = document.getElementById('email');
const phoneNo = document.getElementById('phoneno');
const password = document.getElementById('password');
const confirmPassword = document.getElementById("c-password");

form.addEventListener('submit', (event) => {
event.preventDefault();
validate();
});

function validate() {
    const userVal = user.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phoneNo.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    // username
    if(userVal === "") {
        setErrorMsg(user, "username cannot be blank");
    } else if(userVal.length <= 2) {
        setErrorMsg(user, "min 3 characters");
    } else {
        setSuccessMsg(user);
    }

    // email
    if(emailVal === "") {
        setErrorMsg(email, "Email cannot be blank");
    } else if(isEmail(emailVal)) {
        setErrorMsg(emailVal, "Not a valid email");
    } else {
        setSuccessMsg(email);
    }

    function isEmail(value) {
        var atSymbol = emailVal.indexOf("@");
        if(atSymbol < 1) return false;
        var dot = emailVal.lastIndexOf(".");
        if(dot <= atSymbol + 2) return false;
        if(dot === emailVal.length - 1) return false;
        return true;
    }

    // phone no
    if(phoneVal === "") {
        setErrorMsg(phoneNo, "Number cannot be blank.");
    } else if(phoneVal.length != 10) {
        setErrorMsg(phoneNo, "Number must have 10 digits.");
    } else {
        setSuccessMsg(phoneNo);
    }

    // password
    if(passwordVal == "") {
        setErrorMsg(password, "Please enter a password.");
    } else if(passwordVal.length <= 5) {
        setErrorMsg(password, "Min 6 characters.");
    } else {
        setSuccessMsg(password);
    }

    // confirm password
    if(confirmPasswordVal == "") {
        setErrorMsg(confirmPassword, "This field cannot be blank.");
    } else if(passwordVal != confirmPasswordVal) {
        setErrorMsg(confirmPassword, "Passwords don't match.");
    } else {
        setSuccessMsg(confirmPassword);
    }
}

function setErrorMsg(input, msg) {
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('span');
    console.log(span);
    formGroup.className = "form-group error";
    span.innerText = msg;
}

function setSuccessMsg(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
}














