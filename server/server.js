const express = require('express')
const cors = require('cors')
const app = express();
const router = express.Router()
const processData = require('./processData')

app.use(cors())
app.use(express.static('public'))

let data = null

router.use(function (req, res, next) {
  
  if (req.headers['type'] === 'decimalOddsMoreThanTwo') {
    data = processData(req.headers['type'])
  }
  if (req.headers['type'] === 'decimalOddsLessThanTwo') {
    data = processData(req.headers['type'])
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

