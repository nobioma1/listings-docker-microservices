import express from 'express';

const listingsRouter = express.Router();

listingsRouter.get('/listings', (req, res) => {
  return res.json({ message: 'Some response' });
});

export default listingsRouter;
