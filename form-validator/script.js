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


function checkEmail(input){
  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(reg.test(input.value.trim())){
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid ')
  }
}

function checkRequired(inputArr){
  inputArr.forEach(input =>{
    if(input.value.trim()=== ''){
      showSuccess(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  })
}

function checkLength(input, min, max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min}`)
  } else if (input.value.length > max){
    showError(input, `${getFieldName(input)} must be at less than ${max}`)
  } else {
    showSuccess(input);
  }
}

function matchPassword(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, 'Password do not match.')
  }
}

function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/**
 * Using dynamic validation
 */
form.addEventListener('submit', (e => {
  e.preventDefault(); 

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  matchPassword(password, password2);
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