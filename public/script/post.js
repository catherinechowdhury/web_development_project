//Post
let post= document.getElementById("post")
post.addEventListener('submit',posting)

function posting(e){
    e.preventDefault()
    const post={
        question: document.getElementById("question").value
    }
    console.log(post)
}