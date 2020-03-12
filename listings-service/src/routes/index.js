import { Router } from 'express';

import { Listing } from '#root/db/models';

const listingsRouter = Router();

listingsRouter.get('/listings', async (req, res) => {
  const listings = await Listing.findAll();
  return res.json({ listings });
});

export default listingsRouter;
