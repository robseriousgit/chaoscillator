var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.use(express.static('client'))
app.use('/sounds', express.static('sounds'))

app.listen(8080, () => {
  console.log('app listening on localhost:8080')
});