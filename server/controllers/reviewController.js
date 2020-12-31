const db = require('../db/database.js');

const reviewController = {};
    
// CREATE TABLE gamingReviews
// ( 
//   _id SERIAL PRIMARY KEY,
    // user VARCHAR NOT NULL,
//   platform VARCHAR NOT NULL,
  // gameName VARCHAR NOT NULL,
//   userReview VARCHAR NOT NULL,
//     
//   constraint fk_gamingReviews_users
//      foreign key (user) 
//      REFERENCES users (_id)
// );

// Sql accepted this table; however, foreign keys are not being recognized 
//and we are unable to populate those two columns

// CREATE TABLE gamereview (
 
//   _id INT PRIMARY KEY, 

//   platform VARCHAR NOT NULL,  
    
//   userReview VARCHAR NOT NULL,

//   FOREIGN KEY (_id) REFERENCES users(_id),

//   FOREIGN KEY (_id) REFERENCES users(_id)

//);


    
reviewController.createReview = (req, res, next) => {
    //console.log('I')
    //creating review would take in id, user, platform, name of game, review
    const { id, user, platform, gameName, review } = req.body;
    const createQuery = `INSERT INTO reviews(id, user, platform, gameName, review) VALUES($1, $2, $3, $4, $5)`
        //creating review would take in id, user, platform, name of game, review
    db.query(createQuery, [id, user, platform, gameName, review], (err, response) => {
      if (err) return next(err);

      return next();
    })
  };

  reviewController.readReview = (req, res, next) => {
    const getQuery = `SELECT * FROM "public"."gamereviews" LIMIT 100`
    db.query(getQuery, (err, response) => {
      if (err) return next(err)
      res.locals.review = response.rows
      return next();
    })
  };

  reviewController.deleteReview = (req, res, next) => {
    const { _id } = req.body
    const deleteQuery = ''
    db.query(deleteQuery, [_id], (err, response) => {
      if (err) return next(err)
      return next();
    })
  };






  module.exports = reviewController;


  
  