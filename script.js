const inputs = Array.from(document.querySelectorAll('input'));
inputs.forEach(input => input.addEventListener('focusout', eagerValidation));
inputs.forEach(input => input.addEventListener('input', inputValidation));

let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let email = document.getElementById('email');
let phoneNum = document.getElementById('phone_number');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');

let firstNameError = document.getElementById('first_name_error');
let lastNameError = document.getElementById('last_name_error');
let emailError = document.getElementById('email_error');
let phoneNumError = document.getElementById('phone_number_error');
let passwordError = document.getElementById('password_error');
let confirmPasswordError = document.getElementById('confirm_password_error');


/*each input check starts off false and only becomes true when the 
corresponding input is clicked out of for the first time.
this ensures eager validation where the user has a chance to enter
their values for the first time before errors get displayed
*/
let firstNameChecked = false;
let lastNameChecked = false;
let emailChecked = false;
let phoneNumChecked = false;
let passwordChecked = false;
let confirmPasswordChecked = false;


/* flag input as invalid ONLY when clicking out of the input for the FIRST time.
input will stay flagged as invalid until corrected thereafter 
*/
function eagerValidation(e) {
    let value = e.target.value;
    console.log(value);
    switch(e.target.name) {
        case 'first_name':
            firstNameChecked = true;
            checkFirstName(value);
            break;
        case 'last_name':
            lastNameChecked = true;
            checkLastName(value);
            break;
        case 'email':
            emailChecked = true;
            checkEmail(value);
            break;
        case 'phone_number': 
            phoneNumChecked = true;
            checkPhoneNum(value);
            break;
        case 'password':
            passwordChecked = true;
            checkPassword(value);
            break;
        case 'confirm_password':
            confirmPasswordChecked = true;
            checkConfirmPassword(value);
            break;
    }
}

// check input validation every time user inputs a value into input field
function inputValidation(e) {
    let value = e.target.value;
    switch(e.target.name) {
        case 'first_name':
            checkFirstName(value);
            break;
        case 'last_name':
            checkLastName(value);
            break;
        case 'phone_number':
            checkPhoneNum(value);
            break;
        case 'email':
            checkEmail(value);
            break;
        case 'password':
            checkPassword(value);
            break;
        case 'confirm_password':
            checkConfirmPassword(value);
            break;
    }
}

function checkFirstName(value) {
    if (!firstNameChecked) {
        return;
    }
    if (value.length === 0 || value.match('[0-9]+')) {
        firstNameError.textContent = 'Please type in your first name';
        firstName.classList.remove('input-valid');
        firstName.classList.add('input-invalid');
    } else {
        firstNameError.textContent = '';
        firstName.classList.remove('input-invalid');
        firstName.classList.add('input-valid');
    }
}

function checkLastName(value) {
    if (!lastNameChecked) {
        return;
    }
    if (value.length === 0 || value.match('[0-9]+')) {
        lastNameError.textContent = 'Please type in your last name';
        lastName.classList.remove('input-valid');
        lastName.classList.add('input-invalid');
    } else {
        lastNameError.textContent = '';
        lastName.classList.remove('input-invalid');
        lastName.classList.add('input-valid');
    }
}

function checkEmail(value) {
    if (!emailChecked) {
        return false;
    }
    if (!value.match('[^@\s]+@[^@\s]+\.[^@\s]+')) {
        emailError.textContent = 'Please enter a valid email'
        email.classList.remove('input-valid');
        email.classList.add('input-invalid');
    } else {
        emailError.textContent = '';
        email.classList.remove('input-invalid');
        email.classList.add('input-valid');
    }
}

function checkPhoneNum(value) { 
    if (value.length > 15) {
        phoneNumError.textContent = 'Please enter a valid phone number'
        phoneNum.classList.remove('input-valid');
        phoneNum.classList.add('input-invalid');
    } else {
        phoneNumError.textContent = '';
        phoneNum.classList.remove('input-invalid');
        phoneNum.classList.add('input-valid');
    }
}

function checkPassword(value) {
    let errorMsg = '';
    if (value.length < 8) {
        errorMsg += 'Must be at least 8 characters' + '\n';
    } 
    if (!value.match('[A-Z]')) {
        errorMsg += 'Missing at least one uppercase letter' + '\n';
    }
    if (!value.match('[0-9]')) {
        errorMsg += 'Missing at least one number' + '\n';
    }
    if (!value.match('[^A-Za-z0-9]')) {
        errorMsg += 'Missing at least one special character' + '\n';
    }
    passwordError.textContent = errorMsg;
    if (errorMsg === '') {
        password.classList.remove('input-invalid');
        password.classList.add('input-valid');
    } else {
        password.classList.remove('input-valid');
        password.classList.add('input-invalid');
    }
}

function checkConfirmPassword(value) {
    if (value != password.value) {
        confirmPasswordError.textContent = 'Passwords must match';
        confirmPassword.classList.remove('input-valid');
        confirmPassword.classList.add('input-invalid');
    } else {
        confirmPasswordError.textContent = '';
        confirmPassword.classList.remove('input-invalid');
        confirmPassword.classList.add('input-valid');
    }
}

