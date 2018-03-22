var express = require('express');
var app = express();
var router = express.Router()

app.use(express.static('public'));

let data = null

router.use(function (req, res, next) {
  if (req.headers['type'] === 'decimalOddsMoreThanTwo') {
    data = [1,2,3]
  }
  if (req.headers['type'] === 'decimalOddsLessThanTwo') {
    data = [3,2,1]
  }
  next()
})

//Index html
router.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

router.get('/decimalOddsMoreThanTwo', function (req, res) {
  //code here
  res.status(200).json(data).end()
});
  
router.get('/decimalOddsLessThanTwo', function (req, res) {
  //code here
  res.status(200).json(data).end()
});

app.use('/', router)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

