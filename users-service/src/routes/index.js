import { Router } from 'express';
import { compareSync } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { addHours } from 'date-fns';

import { User, UserSessions } from '#root/db/models';
import ErrorHandler from '#root/helpers/ErrorHandler';

const usersRouter = Router();

usersRouter.post('/users', async (req, res, next) => {
  if (!req.body.name && !req.body.email && !req.body.password) {
    return next(
      new ErrorHandler("Fields 'name', 'email', and 'password' are required")
    );
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

const SESSION_EXPIRY_TIME = 1;
usersRouter.post('/sessions', async (req, res, next) => {
  if (!req.body.email && !req.body.password) {
    return next(new ErrorHandler("Fields 'email' and 'password' are required"));
  }

  try {
    const user = await User.findOne({
      attributes: {}, // remove all set attributes and return all fields
      where: {
        email: req.body.email,
      },
    });

    if (!user || !compareSync(req.body.password, user.password)) {
      return next(new ErrorHandler('Invalid email or password'));
    }

    const userSession = await UserSessions.create({
      id: uuidv4(),
      userId: user.id,
      expiresAt: addHours(new Date(), SESSION_EXPIRY_TIME),
    });

    return res.status(200).json(userSession);
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
