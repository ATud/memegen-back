const models = require('../models');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const app = express();
app.set('authToken','generaretoken');
router.post('/register', function (req, res) {
    let existingUsername=false;
    let existingEmail=false;
    let errorMessage='';
    models.Users.findAll({
        where:{
            username: req.body.username
        }
    }).then(function (users) {
        if(users){
            existingUsername=true;
        }else{
            errorMessage+= 'This username is used \n'
        }
    });
    models.Users.findAll({
        where:{
            email: req.body.email
        }
    }).then(function (emailUser) {
        if(emailUser){
            existingEmail=true;
        }
        else {
            errorMessage += 'This email is used \n'
        }
    });
    if(existingUsername===false  && existingEmail === false) {
        models.Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            avatarUrl: req.body.avatarUrl,
            age: req.body.age
        }).then(function (user) {
            res.send({
                message: user
            });
            console.log('success');
        })
            .catch(function (err) {
                res.status(500);
                res.json('Existing user with this name or email');
                console.log(err, req.body.username, req.body.email);
            });
    }else{
        res.status(500);
        res.json(errorMessage);
    }
});

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


module.exports = router;