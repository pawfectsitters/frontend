const router = express.Router();
const bodyParser = require('body-parser');
const Petsitting = require('../models/Petsitting');

const router = express.Router();


router.post('/new-petsitter', (req, res)=>{
  
 Petsitting.findOne({ email: req.body.email}).then(user=>{
        if(user) {
            res.send({
                message: "User already exists"
            });
        } else {
           const newPetsitter = new Petsitting({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password,
               telephone: req.body.telephone,
               experience: req.body.experience,
               bio: req.body.bio,
               location: req.body.location,
               fees: req.body.fees,
               reviews: req.body.reviews,
               pets: req.body.pets
           });

         
                    newPetsitter
                    .save()
                    .then(user=>res.send(user))
                    .catch(err=>console.log(err));
                });
           })
        }
    })
});

router.all('*', (req, res)=>{
    res.send('404. Page does not exist');
});


module.exports = router;
