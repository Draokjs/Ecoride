const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from root directory (if you have any assets like CSS, JS in same folder or subfolders)
app.use(express.static(__dirname));

// Fallback to Index.html for any unknown route
app.get('*', (req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'ecoridegreen', 'Index.html'));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
