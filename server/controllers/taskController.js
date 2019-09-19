const pool = require('../models/requestModel');

module.exports = {
    postItem(req, res, next) {
        const name = req.body.name;
        const values = [name];
        const queryString = `INSERT INTO items (name) VALUES ($1)`

        pool.query(queryString, values, (err, result) => {
            if (err) console.log('error in post items', err);
            return next();
        })
    },


    getItem(req, res, next) {
        const queryString = `SELECT * FROM items`;

        pool.query(queryString, (err, result) => {
					if(err) console.log('error getting items', err);

					res.locals.items = result.rows;
					
					return next();
				})
    },


//   getuserName(req, res, next) {
//       const queryString = `select username from users`;

//       pool.query(queryString, (err, result) => {
//           if (err) console.log('Error getting userNames', err);

//           res.locals.userNames = result.rows;

//           return next();
//       })
//   },

//   getPassword(req, res, next) {
//       const queryString = `select password from users`;

//       pool.query(queryString, (err, result) => {
//           if(err) console.log('error getting passwords', err);
          
//           res.locals.passwords = result.rows;

//           return next();
//       })
//   },

getOrganization(req, res, next) {
    const queryString = `select * from orgs`;

    pool.query(queryString, (err, result) => {
        if(err) console.log('error getting organizations', err);

        res.locals.organizations = result.rows;

          return next();
    })
}
}

// postUsername(req, )

// }