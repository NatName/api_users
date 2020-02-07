import express         from 'express';
import {
  getUsers,
  getUser
}    from '../controllers/users'

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello");
});

router.get('/users', getUsers);
router.get('/users/:id', getUser);

export default router;
