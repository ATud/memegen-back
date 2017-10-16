
const express = require('express');
const router  = express.Router();
var app = express();
const usersRoute  = require('./users-routes');
const postsRoute  = require('./posts-routes');

const models  = require('../models');
 const jwt = require('jsonwebtoken');

app.set('authToken','generaretoken');


router.post('/login', function(req, res) {

    // find the user
    models.Users.findOne({
        where:{
            username: req.body.username
        }

    }).then( function(user) {
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password !== req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token

                var token = jwt.sign(false, app.get('authToken'), {
                });

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
});

//middleware
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('authToken'), function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});
router.use('/users', usersRoute);
router.use('/posts', postsRoute);
module.exports = router;