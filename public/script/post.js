//Prompt post
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