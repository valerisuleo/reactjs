const router = require('express').Router();
const students = require('../controllers/students');
// 9 require the controllers
const auth = require('../controllers/auth');

// 13 require secureRoute
const secureRoute = require('../lib/secureRoute');

router.route('/students')
// Here we are saying that only users who send a valid token with their request can access any of these routes.
  // 13a update secureRoute
  .all(secureRoute)
  .get(students.index)
  .post(students.create);

router.route('/students/:id')
  // 13a update secureRoute
  .all(secureRoute)

  .get(students.show)
  .put(students.update)
  .delete(students.delete);

  // To test this in Insomnia, we should take the token that was generated when we logged in and add a 'Header' to our request.



// 10 auth routes
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// 11 let's register a user in Insomnia to test it!
// 12 We need to stop users from accessing the students unless they are logged in. We need to create a secureRoute function.


router.all('/*', (req, res) => res.notFound());

module.exports = router;
