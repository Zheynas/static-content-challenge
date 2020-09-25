const fs = require('fs');
const express = require('express');
const marked = require("marked");
const config = require('config');

const filepath = config.get('filepath');
const app = express();

// Set to static
app.use(express.static(__dirname + filepath));
// Use ejs for templating
app.set('view engine', 'ejs');

/**
 * We want to handle all endpoints in the same get as we want the routes to be dynamically created from
 * the file structure
 */
app.get('*', function(req, res) {
  let data = ''

  // Try and read the file
  try {
    data = fs.readFileSync(`.${filepath}${req.url}/index.md`, "utf8");
    // Error reading file
  } catch (err) {
    // File not found
    if (err.code === 'ENOENT') {
      res.status(404)
      
      res.render('template', {
        content: 'Oh no! Page not found :('
      });
    // Other error
    } else {
      res.render('template', {
        content: 'Something went wrong :('
      });
      throw err;
    }
  }

  // Everything is fine, render the content
  res.status(200)
  res.render('template', {
    content: marked(data)
  });
});

module.exports = app
