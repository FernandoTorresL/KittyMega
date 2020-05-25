const express = require('express');
const UsersService = require('../../services/users');

const router = express.Router();

const UserService = new UsersService();

router.get('/', async function (req, res) {
  const { tags } = req.query;

  const users = await UserService.getUsers({ tags });
  console.log(users);
  res.render('csv_files', { data: users });
});

module.exports = router;
