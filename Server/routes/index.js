var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});



/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET business Contacts page. */
router.get('/contact', indexController.displayContactPage);

/* GET login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);


/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);



module.exports = router;
