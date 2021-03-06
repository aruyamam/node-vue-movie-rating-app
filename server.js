const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

// connect to mongodb
mongoose
  .connect('mongodb://localhost/movie_rating_app', { useNewUrlParser: true }, () => {
    console.log('Connection has been made');
  })
  .catch((err) => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

// Includeing controllers
fs.readdirSync('controllers').forEach((file) => {
  if (file.substr(-3) === '.js') {
    const route = require(`./controllers/${file}`);
    route.controller(app);
  }
});

router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port, () => console.log(`api running on port ${port}`));
