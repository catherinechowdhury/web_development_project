const { json } = require("express");


async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  
//Login

let login= document.getElementById("login")
if(login) login.addEventListener('submit',logForm)

function logForm(e){
    e.preventDefault()
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    // console.log(user)

    fetchData('/user/login',user,"POST")
    .then(data =>{
        if(!data.message){
            window.location.href="login.html"
        }
    })
    .catch(err =>{
        console.log(err.message)
    })
}

//Register 
let register= document.getElementById("register")
if(register) register.addEventListener('submit',registerForm)

function registerForm(e){
    e.preventDefault()
    const user = {
        fName: document.getElementById("fName").value,
        lName:document.getElementById("lName").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        confirmation: document.getElementById("confirmation").value
    }
    //console.log(user)
    fetchData('/user/register',user,"POST")
    .then(data =>{
        if(!data.message){
            window.location.href="register.html"
        }
    })
    .catch(err =>{
        console.log(err.message)
    })
}





