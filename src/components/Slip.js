import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { option1, option2 } from '../actions/data'

function Slip({ total, bets, increase, decrease, option1, option2}) {

  return (
    <div>
      <div>
        <p>Betslip</p>
        <select onChange={event => {
          switch(event.target.value) {
            case 'more-than-2' :
              option1()
              break;
            case 'less-than-2' :
              option2()
              break;
          }
        }}>
          <option value="default">Select your odds</option>
          <option value="more-than-2">More than 2</option>
          <option value="less-than-2">Less than 2</option>
        </select>
      </div>
      <div>
        <p>Best bets</p>
        {bets.map(item =>
          item.odds.map(odd =>
            <div>
              <div>
              <p>Name: {item.name}</p>
              <p>Odds: {odd.oddsDecimal}</p>
              </div>
              <div>
                <input type="number" min="0" step=".01" placeholder="stake" onFocus={event => decrease(event.target.value)} onBlur={event => increase(event.target.value)} onKeyUp={(event) => event.target.value = event.target.value.replace(/^((\d*)[.](\d{3}))/, '')}/>
              </div>
            </div>
          )
        )}
      </div>
      <br/>
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
      <footer>
        <Link to="/bet">Bet Now</Link>
      </footer>
    </div>
  )
}

export default connect(
  state => ({ total: state.count.number, bets: state.odds.data }),
  { increase, decrease, option1, option2 }
)(Slip)