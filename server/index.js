const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Simple JSON endpoint (health)
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Basic API endpoint to simulate contact submissions (no real mail)
app.use(express.json());
app.post('/api/contact', (req, res) => {
  // In production you'd validate and send email or persist to DB
  console.log('Contact submission:', req.body);
  res.json({ success: true, message: 'Received (demo). We will contact you shortly.' });
});

// Fallback to index.html for SPA-like navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Horizon Realty site running on port ${PORT}`));
