//Login

let login= document.getElementById("login")
login.addEventListener('submit',logIn)

function logIn(e){
    e.preventDefault()
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }
}

//Register 
let register= document.getElementById("register")
register.addEventListener('submit',reg)

function reg(e){
    e.preventDefault()
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        confirmation: document.getElementById("confirmation").value
    }
}

//Post
let post= document.getElementById("post")
register.addEventListener('submit',posting)

function posting(e){
    e.preventDefault()
    const post={
        question: document.getElementById("question").value
    }
}


