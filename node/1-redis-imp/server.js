import express from 'express';
import userRoutes from './routes/userRoute.js';
import { connectRedis } from './redisClient.js';

const app = express();

//connect redis
await connectRedis();
app.use(express.json());

app.use('/api', userRoutes);

const port = 3000;

app.listen(3000, () => {
  console.log('Server is listing at 3000');
});
