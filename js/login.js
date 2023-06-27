const loginButton = document.querySelector('.login-button')
const errorOutput = document.querySelector('.error-output')
errorOutput.style.color = 'white'

if (document.cookie == 'user=null') {
   console.log('Logged out')
} else if(document.cookie) {
   let user = JSON.parse(document.cookie.split('user=').pop())
   localStorage.setItem('user', JSON.stringify(user))
   window.location.href = './../pages/home.html'
}

function login() {
   const emailInput = document.querySelector('#email')
   const passwordInput = document.querySelector('#password')
   const users = JSON.parse(localStorage.getItem('users'))
   if (users) {
      users.forEach(user => {
         if (!emailInput.value && !passwordInput.value) {
            errorOutput.innerHTML = 'You did not type email and password'
         } else if (!emailInput.value) {
            errorOutput.innerHTML = 'You did not type email'
         } else if (!passwordInput.value) {
            errorOutput.innerHTML = 'You did not type password'
         } else if (user.email === emailInput.value && user.password === passwordInput.value){
            localStorage.setItem('user', JSON.stringify(user))
            window.location.href = './../pages/home.html'
            document.cookie = `user=${JSON.stringify(user)}`
            passwordInput.value = ''
            emailInput.value = ''
         } else {
            errorOutput.innerHTML = 'Email or password incorrect'
         }
      }) 
   } else {
      errorOutput.innerHTML = 'No users registered'
      passwordInput.value = ''
      emailInput.value = ''
   }
}

loginButton.addEventListener('click', login)