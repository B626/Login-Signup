const signButton = document.querySelector('#signup-button')
const errorOutput = document.querySelector('.error-output')
errorOutput.style.color = 'white'

let users = []

function pushUser(users, firstNameInput, lastNameInput, emailInput, passwordInput) {
   let user = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value
   }
   users.push(user)
   localStorage.setItem('users', JSON.stringify(users))
   firstNameInput.value = ''
   lastNameInput.value = ''
   emailInput.value = ''
   passwordInput.value = ''
   errorOutput.innerHTML = 'Signed in'
}

function signup() {
   const firstNameInput = document.querySelector('#firstName')
   const lastNameInput = document.querySelector('#lastName')
   const emailInput = document.querySelector('#email')
   const passwordInput = document.querySelector('#password') 
   if (firstNameInput.value && lastNameInput.value && emailInput.value && passwordInput.value) {
      let users = JSON.parse(localStorage.getItem('users'))
      if (users) {
         users.forEach(e => {
            if (e.email == emailInput.value) {
               errorOutput.innerHTML = 'Account with this email already exists'
               firstNameInput.value = ''
               lastNameInput.value = ''
               emailInput.value = ''
               passwordInput.value = ''
            } else if (e.email !== emailInput.value){ 
               let users = JSON.parse(localStorage.getItem('users'))
               pushUser(users, firstNameInput, lastNameInput, emailInput, passwordInput)
            }
         })
      } else {
         let users = []
         pushUser(users, firstNameInput, lastNameInput, emailInput, passwordInput)
      }
   } else {
      errorOutput.innerHTML = 'You did not fill all the columns'
   }
}

signButton.addEventListener('click', signup)