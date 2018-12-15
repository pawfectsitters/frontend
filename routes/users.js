const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const secret = require('../config/keys').secret
const User = require('../models/User');
const Petsitter = require('../models/Petsitter');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Pawfect Sitters Backend");
});

router.post('/register-user', (req, res)=>{

    // Check database for new email address
    User.findOne({ email: req.body.email})
    .then(user=>{
        // If email is taken, inform the user
        if(user) {
            res.send({
                message: "User already exists"
            });
        } 
        // Otherwise save the new user's information
        else {
           const newUser = new User({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password,
               location: req.body.location,
               pettype: req.body.pettype
           });

           // Have bcrypt generate a salt; that is, extra data to add to hash for complexity
           bcrypt.genSalt(10, (err, salt)=>{
                // Add the generated salt to the hash
                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    // Change the users password to the hash
                    newUser.password = hash;
                    // Save the users info with hashed password
                    newUser
                    .save()
                    .then(user=>res.send(user))
                    .catch(err=>console.log(err));
                });
           })
        }
    })
});

router.post('/register-petsitter', (req, res)=>{

    // Check database for new email address
    Petsitter.findOne({ email: req.body.email})
    .then(user=>{
        // If email is taken, inform the user
        if(user) {
            res.send({
                message: "User already exists"
            });
        } 
        // Otherwise save the new user's information
        else {
           const newPetsitter = new Petsitter({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password,
               location: req.body.location,
               experience: req.body.experience
           });

           // Have bcrypt generate a salt; that is, extra data to add to hash for complexity
           bcrypt.genSalt(10, (err, salt)=>{
                // Add the generated salt to the hash
                bcrypt.hash(newPetsitter.password, salt, (err, hash)=>{
                    // Change the users password to the hash
                    newPetsitter.password = hash;
                    // Save the users info with hashed password
                    newPetsitter
                    .save()
                    .then(user=>res.send(user))
                    .catch(err=>console.log(err));
                });
           })
        }
    })
});


router.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    // Check to see if the email exists in database
    User.findOne({email}).then(user=>{

        // If it does not exist
        if(!user){
            res.send({
                message: "A user with that email does not exist"
            });
        
        // Email exists. Let's verify the password
        } else {

            // Compare login password with the password in database
            // after decryption
            bcrypt.compare(password, user.password)
            .then(isMatch=>{
                if(isMatch) {

                    const payload = {id: user.id, name: user.name};
                    // jwt.sign() needs 4 arguments
                    jwt.sign(
                        payload, // payload
                        secret, //secret 
                        {expiresIn: 3600}, // session time limit 
                        (err, token)=>{ //callback
                            res.send({
                                message: "User is logged in",
                                token: 'Bearer ' + token,
                                name: user.name
                            })
                        }
                    );
                } else {
                    res.send({
                        message: "Incorrect login information"
                    })
                }
            });
        }
    });
});

// The private route
router.get(
    '/Mypets', 
    passport.authenticate('jwt', {session: false}), 
    (req, res)=>{
    res.send({
        myPets: [
            {
                name: "Victor",
                pettype: "Cat"
            },
            {
                name: "Andrew",
                pettype: "Cat"
            }
        ]
    })
});

router.all('*', (req, res)=>{
    res.send('404. Page does not exist');
});


module.exports = router;
