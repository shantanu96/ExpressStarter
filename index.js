// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './src/routes/post.routes';

// Initialize Express app
const app = express();

// Set up body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/blogweb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
