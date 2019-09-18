const pool = require('../models/requestModel');

module.exports = {
  getuserName(req, res, next) {
      const queryString = `select username from users`;

      pool.query(queryString, (err, result) => {
          if (err) console.log('Error getting userNames', err);

          res.locals.userNames = result.rows;

          return next();
      })
  },

  getPassword(req, res, next) {
      const queryString = `select password from users`;

      pool.query(queryString, (err, result) => {
          if(err) console.log('error getting passwords', err);
          
          res.locals.passwords = result.rows;

          return next();
      })
  },

getOrganization(req, res, next) {
    const queryString = `select * from orgs`;

    pool.query(queryString, (err, result) => {
        if(err) console.log('error getting organizations', err);

        res.locals
    })
},

}