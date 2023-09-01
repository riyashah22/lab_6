function handleChange() {
    const NameInput = document.getElementById('name');
    const EmailInput = document.getElementById('email');
    const PassInput = document.getElementById('password');
    const CPassInput = document.getElementById('cpassword');
    const DobInput = document.getElementById('dob');

    if (NameInput.value == '') {
        document.getElementById('nameError').style.visibility = 'hidden';
        NameInput.classList.remove('error-focus');
        NameInput.classList.remove('success-focus');
    } else if (new RegExp('^[A-Za-z ]{3,}$').test(NameInput.value)) {
        document.getElementById('nameError').style.visibility = 'hidden';
        NameInput.classList.remove('error-focus');
        NameInput.classList.add('success-focus');
    } else {
        document.getElementById('nameError').style.visibility = 'visible';
        NameInput.classList.remove('success-focus');
        NameInput.classList.add('error-focus');
    }

    if (EmailInput.value == '') {
        document.getElementById('emailError').style.visibility = 'hidden';
        EmailInput.classList.remove('error-focus');
        EmailInput.classList.remove('success-focus');
    } else if (new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$').test(EmailInput.value)) {
        document.getElementById('emailError').style.visibility = 'hidden';
        EmailInput.classList.remove('error-focus');
        EmailInput.classList.add('success-focus');
    } else {
        document.getElementById('emailError').style.visibility = 'visible';
        EmailInput.classList.remove('success-focus');
        EmailInput.classList.add('error-focus');
    }

    if (PassInput.value == '') {
        document.getElementById('passError').style.visibility = 'hidden';
        PassInput.classList.remove('error-focus');
        PassInput.classList.remove('success-focus');
    } else if (new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$').test(PassInput.value)) {
        document.getElementById('passError').style.visibility = 'hidden';
        PassInput.classList.remove('error-focus');
        PassInput.classList.add('success-focus');
    } else {
        document.getElementById('passError').style.visibility = 'visible';
        PassInput.classList.remove('success-focus');
        PassInput.classList.add('error-focus');
    }

    if (CPassInput.value == '') {
        document.getElementById('cpassError').style.visibility = 'hidden';
        CPassInput.classList.remove('error-focus');
        CPassInput.classList.remove('success-focus');
    } else if (CPassInput.value == PassInput.value) {
        document.getElementById('cpassError').style.visibility = 'hidden';
        CPassInput.classList.remove('error-focus');
        CPassInput.classList.add('success-focus');
    } else {
        document.getElementById('cpassError').style.visibility = 'visible';
        CPassInput.classList.remove('success-focus');
        CPassInput.classList.add('error-focus');
    }

    let dob = new Date(DobInput.value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth() == dob.getMonth() && today.getDate() < dob.getDate())) age -= 1;

    if (DobInput.value == '' || age >= 18) {
        document.getElementById('dobError').style.visibility = 'hidden';
        DobInput.classList.remove('error-focus');
        DobInput.classList.add('success-focus');
    } else {
        document.getElementById('dobError').style.visibility = 'visible';
        DobInput.classList.remove('success-focus');
        DobInput.classList.add('error-focus');
    }

    if (new RegExp('^[A-Za-z ]{3,}$').test(NameInput.value) && new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$').test(EmailInput.value) && new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$').test(PassInput.value) && CPassInput.value == PassInput.value && age >= 18) {
        document.getElementsByTagName('button')[0].classList.remove('disabled')
    }

}
