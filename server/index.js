import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

app.use(express.json());

const port = process.env.PORT || '8000';

app.listen(port, () => {
  console.log(`listening for requests http://localhost:${port}`);
});
