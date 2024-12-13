const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS User (
    UserID INT NOT NULL AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL UNIQUE,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`
  await con.query(sql);  
}

createTable()

//check to see if username is in use:
async function userExists(user) {
  let sql = `
    SELECT * FROM User
    WHERE Username = "${user.Username}"
  `
  return await con.query(sql)
}

// CREATE - Register
async function register(user) {
  let cUser = await userExists(user)
  if(cUser.length > 0) throw Error("Username already in use.")
  
  let sql = `
    INSERT INTO User (Username, Password, Email)
    VALUES("${user.Username}", "${user.Password}", "${user.Email}")
  `  
  await con.query(sql)
  let newUser = await login(user)
  return newUser 
}

//READ - Login
async function login(user) {
  let cUser = await userExists(user)
  if(!cUser[0]) throw Error("Username does not exist!")
  if(cUser[0].Password != user.Password) throw Error("Password incorrect!!")

  return cUser[0]
}

//UPDATE - Change email
async function updateEmail(user) {
  let cEmail = await getEmail(user)
  if(cEmail) throw Error("Email already in use!!")

  let sql = `
    UPDATE User SET Email="${user.Email}"
    WHERE Username="${user.Username}"
  `
  await con.query(sql)
  let updatedUser = await userExists(user)
  return updatedUser[0]
}

async function getEmail(user) {
  let sql = `
    SELECT Email FROM User
    WHERE Email="${user.Email}"
  `
  let email = await con.query(sql)
  return email[0]
}

//DELETE - Delete Account
async function deleteAccount(user) {
  let sql = `
    DELETE FROM User
    WHERE UserID = ${user.UserID}
  `
  await con.query(sql)
}

//Gets all users
async function getAllUsers() {
  let sql = `SELECT * FROM User;`
  return await con.query(sql)
}

module.exports = {register, login, updateEmail, deleteAccount, getAllUsers }