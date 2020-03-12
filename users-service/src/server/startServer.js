import express from 'express';
import cors from 'cors';

import accessENV from '#root/helpers/accessENV';
import usersRouter from '../routes';

const PORT = accessENV('PORT', 7101);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

app.use('/', usersRouter);

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => console.info(`Users service live @ ${PORT}`));
