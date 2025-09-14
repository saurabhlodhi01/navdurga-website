const express = require('express');
const path = require('path');
const app = express();



// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
  res.render("index");

});

// Port setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on `);
});

