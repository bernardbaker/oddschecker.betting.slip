var express = require('express')
var cors = require('cors')
var app = express();
var router = express.Router()

app.use(cors())
app.use(express.static('public'))

let data = null
let bets = null

function loadData() {
  var fs = require('fs');
  return JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))
}

router.use(function (req, res, next) {
  let json = null
  data = []
  bets = []
  if (req.headers['type'] === 'decimalOddsMoreThanTwo') {
    json = loadData()
    json.bets.forEach((element, index) => {
      bets.push({name: element.name, odds:[]})
      let odds = element.odds.filter(item => {
        return item.oddsDecimal >= 2.0
      })
      bets[index].odds.push(...odds)
      bets[index].odds.forEach(item => {
        item.stake = 0
      })
    });
    data = bets.filter(item => item.odds.length)
  }
  if (req.headers['type'] === 'decimalOddsLessThanTwo') {
    json = loadData()
    json.bets.forEach((element, index) => {
      bets.push({name: element.name, odds:[]})
      let odds = element.odds.filter(item => {
        return item.oddsDecimal < 2.0
      })
      bets[index].odds.push(...odds)
      bets[index].odds.forEach(item => {
        item.stake = 0
      })
    });
    data = bets.filter(item => item.odds.length)
  }
  console.log(data)
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

