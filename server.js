const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './'})
})

app.get('/', function (req, res) {
  res.send('/page1')
})

app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));
