const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');

// middleware
module.exports = function restricted(req, res, next) {
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({message: 'You shall not pass'});
  }
  // const { username, password } = req.headers;

  // if (username && password) {
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: 'You shall not pass'});
  //       }
  //     })
  //     .catch(error => {
  //       res.status(500).json(error);
  //     });
  // } else {
  //   res.status(400).json({ message: 'Please provide credentials' });
  // }
};
