const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', validate);

function validatePassword(password) {
  let hasNumber = false;
  let hasAlphabet = false;
  let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', '<', '>', ',', '.', '/', '?', '€', '/', '//'];
  let hasSymbols = false;

  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      hasAlphabet = true;
    }
    if (!isNaN(password[i])) {
      hasNumber = true;
    }
    if (symbols.includes(password[i])) {
      hasSymbols = true;
    }
    if (hasAlphabet && hasNumber && hasSymbols) {
      return true;
    }
  }

  return false;
}

function validate(event) {
    event.preventDefault();
    let error = false;

    let name = document.getElementById('name');
    if (name.value.length < 5 || name.value.length > 30) {
        error = true;
        alert('Name must be between 5 - 30 characters');
        return;
    }

    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', '<', '>', ',', '.', '/', '?', '€', '/', '//'];
    for (let i = 0; i < name.value.length; i++) {
        if (numbers.includes(name.value[i])) {
        error = true;
        alert('Name must not contain any numbers');
        return;
        } else if (symbols.includes(name.value[i])) {
        error = true;
        alert('Name must not contain any symbols');
        return;
        }
    }

    let male = document.getElementById("male")
    let female = document.getElementById("female")
    if(!male.checked && !female.checked){
        error = true
        alert("Gender cannot be empty")
        return
    }

    let region = document.getElementById('region');
    if (region.value === 'select') {
        error = true;
        alert('Please select a region');
        return;
    }

    let password = document.getElementById('password');
    if (password.value.length < 5 || password.value.length > 30) {
        error = true;
        alert('Password must be between 5 - 30 characters');
        return;
    }

    if (validatePassword(password.value) === false) {
        alert('Password must contain alphabets, numbers, and symbols');
        return;
    }

    let tos = document.getElementById('tos');
    if (!tos.checked) {
        error = true;
        alert('You must accept the Terms and Conditions');
        return;
    }

    if (!error) {
        alert('Registration Successful');
    }
}