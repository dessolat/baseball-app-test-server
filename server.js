const express = require('express');
const cors = require('cors');
const app = express();
// const router = require('./routes/Routes');
const PORT = process.env.PORT || 3001;
const Controller = require('./controllers/controller')

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.24:3000');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.get('/:count', Controller.getGameStart);
app.get('/', Controller.getGame);
app.use((req, res, next) => {
  res.status(404);
  res.send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
