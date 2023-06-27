const logoutBtn = document.querySelector('button')

const user = localStorage.getItem('user')

const firstName = document.querySelector('h1')
const lastName = document.querySelector('h2')
const email = document.querySelector('h3')

firstName.innerHTML = `User First Name: ${JSON.parse(user).firstName}`
lastName.innerHTML = `User Last Name: ${JSON.parse(user).lastName}`
email.innerHTML = `Email: ${JSON.parse(user).email}`

function logout() {
   localStorage.removeItem('user')
   document.cookie = 'user=null'
   window.location.href = './../pages/login.html'
   console.log(document.cookie)
}

logoutBtn.addEventListener('click', logout)