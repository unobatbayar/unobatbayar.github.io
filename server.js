// server.js for Express.js server
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory TODO
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));  // <-- This will serve files from the current directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
