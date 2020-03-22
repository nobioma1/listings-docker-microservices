import { Router } from 'express';

import ErrorHandler from '../helpers/ErrorHandler';
import { Listing } from '#root/db/models';

const listingsRouter = Router();

listingsRouter.get('/', async (req, res) => {
  const listings = await Listing.findAll();
  return res.json({ listings });
});

listingsRouter.post('/', async (req, res, next) => {
  if (!req.body.title && !req.body.description) {
    throw new ErrorHandler("'title' and 'description' are required");
  }

  try {
    const listing = await Listing.create({
      title: req.body.title,
      description: req.body.title,
    });

    res.status(201).json({ listing });
  } catch (error) {
    next(error);
  }
});

export default listingsRouter;
