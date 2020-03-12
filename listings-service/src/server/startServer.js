import express from 'express';
import cors from 'cors';

import accessENV from '#root/helpers/accessENV';

const PORT = accessENV('PORT', 7100);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

app.listen(PORT, () => console.info(`Listings service live @ ${PORT}`));
