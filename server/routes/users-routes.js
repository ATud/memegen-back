const models = require('../models');
const express = require('express');
const router = express.Router();

router.post('/create', function (req, res) {
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
            res.json({
                message: 'Existing user with this name or email'
            });
            console.log(err, req.body.username, req.body.email);
        });
});

router.get('/get', function (req, res) {
    models.Users.findAll().then(function (users) {
        res.json(users);
    });
});


router.get('/:id',
    function (req, res) {
        const id = req.params.id;

        models.Users.findById(id).then(function (user) {
            if (user) {
                res.json(user)
            } else {
                res.json({
                    message: 'User not found'
                });
            }

        }).catch(function (err) {

            console.log(err);
        });
    });

router.put('/:id',
    function (req, res) {
        const id = req.params.id;

        models.Users.update({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                description: req.body.description,
                avatarUrl: req.body.avatarUrl,
                age: req.body.age
            },
            {
                where:
                    {
                        id: id
                    }
            }).then(function (userUpdated) {
            models.Users.findById(id).then(function (user) {
                if (user) {
                    res.send(user)
                } else {
                    res.send({
                        message: 'User not found'
                    });
                }

            }).catch(function (err) {

                console.log(err);
            });
        })
    });

module.exports = router;