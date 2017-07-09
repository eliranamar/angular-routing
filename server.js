var express = require('express');
var app = express();
app.use(express.static('node_modules'));
app.use(express.static('public'));

app.all('/templates/*', function(req, res) {
  res.sendFile(__dirname + "/public/templates/errorTemplate.html")
});
app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(8000, function(){
  console.log('on port 8000');
});

