let data = null
let bets = null

function loadData() {
  var fs = require('fs');
  return JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))
}

function processData(type) {
  let json = null
  data = []
  bets = []
  json = loadData()
  json.bets.forEach((element, index) => {
    bets.push({name: element.name, odds:[]})
    let odds = element.odds.filter(item => {
      if(type === 'decimalOddsMoreThanTwo') {
        return item.oddsDecimal >= 2.0
      } else {
        return item.oddsDecimal < 2.0
      }
    })
    bets[index].odds.push(...odds)
    bets[index].odds.forEach(item => {
      item.stake = 0
    })
  });
  data = bets.filter(item => item.odds.length)
  return data
  console.log('process data')
}
module.exports = processData