const express = require('express')
const path = require('path')
const api = require('./routes/notes.js'); 

const PORT = process.env.PORT || 5000;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api', api)

//Set static folder
app.use(express.static('public'))

//Get route for homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);