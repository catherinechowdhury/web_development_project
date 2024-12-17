//Prompt post
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: "POST", // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(application/json) // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  
let post= document.getElementById("post")
post.addEventListener('submit',posting)

function posting(e){
    e.preventDefault()
    const post={
        question: document.getElementById("question").value
    }
    console.log(post)
}

//answer to prompt
// let pAnswer= document.getElementById("promptAnswer")
// if(pAnswer) pAnswer.addEventListener('submit',answer)

// function answer(e){
//     e.preventDefault()
//     const prompt={
//         answer: document.getElementById("answer").value
//     }
//     console.log(prompt)
// }