const pool = require('../models/requestModel');

module.exports = {
    postItem(req, res, next) {
        // const name = req.body.name;
        const sendValues = [req.body.name, req.body.description, req.body.topics_id, req.body.users_id];
        const returnValues = [req.body.topics_id, req.body.name]
        const q1 = `INSERT INTO items (name, description, topics_id, users_id) VALUES ($1, $2, $3, $4) RETURNING items.id WHERE (name, description, topics_id, users_id) = ($1, $2, $3, $4)`;
        const q2 = `SELECT items.id, items.name, items.description, items.vote, items.topics_id, users.username FROM items  INNER JOIN users ON items.users_id = users.id WHERE (topics_id, name) = ($1, $2);`
        const q3 = `SELECT TOP 1 * FROM items ORDER BY ID DESC;`

        pool.query(q1, sendValues)
            .then((res)=>{
                console.log('first resonse is ', res.rows)
            })
            .catch((err) => {
             return next(err);
            })
            // .then(() => {
            //     pool.query(q3, (err,result) => {
            //         if(err) 
            //         return next(err);
            //         console.log('result.rows is ', result.rows)
            //         res.locals = result.rows;
            //     })
            // }
            // )
            return next();
        },


    getItem(req, res, next) {
        let id = [req.body.topics_id];
        // const queryString = `SELECT * FROM items`;
        const q = `SELECT items.id, items.name, items.description, items.vote, items.topics_id, users.username FROM items  INNER JOIN users ON items.users_id = users.id WHERE topics_id = ($1);`

        pool.query(q, id, (err, result) => {
					if(err) console.log('error getting items', err);
                    console.log('result.rows is', result.rows)
					res.locals = result.rows;
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