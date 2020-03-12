import { Router } from 'express';

import { User } from '#root/db/models';

const usersRouter = Router();

usersRouter.post('/users', async (req, res, next) => {
  if (!req.body.name && !req.body.email && !req.body.password) {
    return next(new Error("'name', 'email', 'password' are required"));
  }

  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.json({ user: newUser });
  } catch (error) {
    return next(error);
  }
});

export default usersRouter;
