var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/client'));

var port = process.env.PORT || 2110;

app.listen(2110, function () {
  console.log('listening on port %d!', this.address().port);
});