const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = 3002;

// Enable CORS with specific options
app.use(cors({
  origin: '*', // Allow all origins for testing
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve questions endpoint
app.get('/questions', async (req, res) => {
  try {
    console.log('Received request for questions');
    const dataPath = path.join(__dirname, 'public', 'data.json');
    console.log('Data file path:', dataPath);
    
    const data = await fs.readFile(dataPath, 'utf8');
    console.log('Successfully read data file');
    
    const jsonData = JSON.parse(data);
    console.log('Successfully parsed JSON data');
    
    res.json(jsonData);
    console.log('Successfully sent response');
  } catch (error) {
    console.error('Error reading data file:', error);
    res.status(500).json({ 
      error: 'Failed to read questions data', 
      details: error.message,
      stack: error.stack
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start server with error handling
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for all origins`);
  console.log(`Data file location: ${path.join(__dirname, 'public', 'data.json')}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port.`);
  }
}); 