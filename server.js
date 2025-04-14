const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint for questions
app.get('/api/questions', async (req, res) => {
  try {
    console.log('Reading questions file...');
    const dataPath = path.join(__dirname, 'data', 'questions.json');
    console.log('Data path:', dataPath);
    
    const data = await fs.readFile(dataPath, 'utf8');
    console.log('Data read successfully');
    
    const questions = JSON.parse(data);
    console.log('Questions parsed successfully');
    
    res.json(questions);
  } catch (error) {
    console.error('Error reading questions:', error);
    res.status(500).json({ 
      error: 'Failed to load questions',
      details: error.message 
    });
  }
});

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 