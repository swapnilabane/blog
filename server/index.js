import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import { authRoute } from './routes/authRoutes.js';

const app = express();

app.use(express.json());

const port = process.env.PORT || '8000';
const mongoURL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use('/api/auth/v1', authRoute);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening for requests http://localhost:${port}`);
  });
});
