const router = require('express').Router();
const { User } = require('../../models');
 
router.post('/', (req, res) => {
 User.create({
   username: req.body.username,
   password: req.body.password
 })
   .then(dbUserData => {
     req.session.save(() => {
       req.session.userId = dbUserData.id;
       req.session.username = dbUserData.username;
       req.session.loggedIn = true;
 
       res.json(dbUserData);
     });
   })
   .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) => {
  
   User.findOne({
     where: {
       username: req.body.username
     }
   })  
  })
 
  

module.exports = router;