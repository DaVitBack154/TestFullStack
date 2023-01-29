const express = require('express');
const router = express.Router();
const {
  registerUser,
  getUserAll,
  login,
  report,
} = require('../controllers/index');

// router.get('/test', (req, res) => {
//   res.send('TESTT');
// });

router.post('/register', registerUser);

router.get('/getuser', getUserAll);

router.post('/login', login);

router.get('/report', report);
module.exports = router;
