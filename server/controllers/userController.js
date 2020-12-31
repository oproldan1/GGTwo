const db = require('../db/database.js');
const bcrypt = require('bcrypt');
const saltRounds = 13;

// queries should only be to the user Table
const userController = {}

userController.createUser = (req, res, next) => {
  // request body should have username and password
  const { username, password } = req.body;
  // hash function accepts password and turns it into an encrypted version of pw and stores it in the hash variable
  bcrypt.hash(password, saltRounds, function(err, hash) {
    // error handling
    if (err) {
      console.log('error creating hash')
      return next(err);
    }
    // hash is our encrypted password
    // Store hash in your password DB.
    const createQuery = `INSERT INTO users (username, password) VALUES ($1, $2)`
    // sending a query to the database with the username and our newly created hash password
    db.query(createQuery, [username, hash], (err, response) => {
      if (err) {
        console.log('error storing hash in DB')
        return next(err);
      }
      res.locals.username = username;
      return next();
    })

  });
  
};

// middleware to create session (store session in DB to verify later on)

// middleware to set session as a cookie (set SSID cookie)
  // this cookie will expire at a certain point


userController.verifyUser = (req, res, next) => {
  // when we verify the user, check for the userId that we got from the cookie in the DB
  // if the session is still active (from the cookie) and it matches the id in DB
  // theyre good to go 

  // look for that user in the db
  // const findQuery = `SELECT * FROM users WHERE username=$1 AND password=$2`;
  const { username, password } = req.body;
  const findQuery = `SELECT * FROM users WHERE username=$1`;
    // query for the username (which is unique)
    db.query(findQuery, [username], (err, response) => {
      console.log(response)

      if (err) return res.json('Wrong Username or Password');
      //  once we find the username, we will have a response from the db
      // compare the db hash with the bcrypt.compare(hash)
      bcrypt.compare(password, response.rows[0].password) 
        // if a match, both username and encrypted password are A-OK
        .then((result) =>{
          if(!result){
            console.log('passwords do not match', result)
            // console.log('err', err)
            //this means password doesnt match and redirects client back to login page
            res.redirect('/')
          } else {
            console.log('passwords match', result)
            //if passwords match, username is store in res.locals object enabling both front/backend use
            res.locals.username = username;
            return next()
          }
        })
        .catch((err) => console.log('could not retrieve password from hash'))
    })
}
  

  

module.exports = userController;