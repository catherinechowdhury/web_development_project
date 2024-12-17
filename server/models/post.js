const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Post (
    PostID INT NOT NULL AUTO_INCREMENT,
    Content VARCHAR(255),
    CONSTRAINT postPK PRIMARY KEY(postID)
  );`
  await con.query(sql);  
}

createTable()

//CREATE -create post
async function createPost(user) {
    let sql = `
      INSERT INTO Post (Content)
      VALUES("${post.Content}")
    `  
    await con.query(sql)
  }

//READ - read all posts from a user
async function allUserPosts() {
    let sql = `
    SELECT * FROM Post
    WHERE PostID= "${post.PostID}"
    `
    return await con.query(sql)
  }
//Update - modify post
async function updatePost(post) {
    let sql = `
      UPDATE Post SET Content="${post.Content}"
      WHERE PostID="${user.PostID}"
    `
    await con.query(sql)
  }

//Delete -delete post
async function deletePost(post) {
    let sql = `
      DELETE FROM Post
      WHERE PostID = "${post.PostID}"
    `
    await con.query(sql)
  }

module.exports = {createPost, allUserPosts,updatePost, deletePost}