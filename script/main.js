//Login

let login= document.getElementById("login")
if(login) login.addEventListener('submit',logForm)

function logForm(e){
    e.preventDefault()
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    console.log(user)
}

//Register 
let register= document.getElementById("register")
if(register) register.addEventListener('submit',registerForm)

function registerForm(e){
    e.preventDefault()
    const user = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        confirmation: document.getElementById("confirmation").value
    }
    console.log(user)
}




