import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { singoutRouter } from './routes/singout';
import { singupRouter } from './routes/singup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  }),
);
app.use(signinRouter);
app.use(currentUserRouter);
app.use(singoutRouter);
app.use(singupRouter);
app.get('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY not found');
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('connected to mongo DB');
  } catch (error) {
    console.error(error);
  }
};

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

start();
