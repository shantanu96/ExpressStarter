// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import postRoutes from './src/routes/post.routes';
import indexRoutes from './src/routes/index.routes';

// Initialize Express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', true);

// Set up body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);
app.use('/', indexRoutes);

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/blogweb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
