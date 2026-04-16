import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import fs from 'fs';

const app = express();

// create uploads folder if not exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
