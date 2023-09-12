import express from 'express';
import cors from 'cors';

// Initialize Express
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

// Initialize server
app.listen(3005, () => {
  console.log('Running on port 3005.');
});

export default app;
