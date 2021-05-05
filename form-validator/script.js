const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


function isValidEmail(email){
  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(String(email).toLowerCase());
}

function checkRequired(inputArr){
  inputArr.forEach(input =>{
    if(input.value.trim()=== ''){
      showSuccess(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess();
    }
  })
}

function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/**
 * Using dynamic validation
 */
form.addEventListener('submit', (e => {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required.')
  } else {
    showSuccess(username)
  }
  if (email.value === '') {
    showError(email, 'Email is required.')
  } else if (!isValidEmail(email.value)){
    showError(email, 'Email is not valid.')
  }else {
    showSuccess(email)
  }
  if (password.value === '') {
    showError(password, 'Password is required.')
  } else {
    showSuccess(password)
  }
  if (password2.value === '') {
    showError(password2, 'Confirm password is required.')
  } else {
    showSuccess(password2)
  }
}))

/**
 * Using simple validation
 */
// form.addEventListener('submit', (e => {
//   e.preventDefault();

//   if (username.value === '') {
//     showError(username, 'Username is required.')
//   } else {
//     showSuccess(username)
//   }
//   if (email.value === '') {
//     showError(email, 'Email is required.')
//   } else if (!isValidEmail(email.value)){
//     showError(email, 'Email is not valid.')
//   }else {
//     showSuccess(email)
//   }
//   if (password.value === '') {
//     showError(password, 'Password is required.')
//   } else {
//     showSuccess(password)
//   }
//   if (password2.value === '') {
//     showError(password2, 'Confirm password is required.')
//   } else {
//     showSuccess(password2)
//   }
// }))