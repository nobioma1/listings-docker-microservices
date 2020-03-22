import express from 'express';
import cors from 'cors';

import accessENV from '#root/helpers/accessENV';
import listingsRouter from '../routes';

const PORT = accessENV('PORT', 7100);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

app.use('/listings', listingsRouter);

app.listen(PORT, () => console.info(`Listings service live @ ${PORT}`));
