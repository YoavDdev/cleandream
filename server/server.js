const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Laundry Project API' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, phone, email, message } = req.body;
  
  // Here you would typically save this data to a database
  // or send an email notification
  
  console.log('Contact form submission:', { name, phone, email, message });
  
  // For now, just return a success response
  res.json({ 
    success: true, 
    message: 'פנייתך התקבלה בהצלחה! ניצור איתך קשר בהקדם.'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
