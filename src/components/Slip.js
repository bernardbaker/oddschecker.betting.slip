import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { option1, option2, storeOption, calculateStake } from '../actions/data'
import './Styles.css'

function Slip({ bets, option, option1, option2, storeOption, calculateStake }) {

  return (
    <div
      className="bet-slip-container"
    >
      <div>
        <p
          className="title"
        >
          Betslip
        </p>
        <select
          className="option-select"
          onChange={event => {  
            
            storeOption(event.target.value)

            switch(event.target.value) {
              case 'more-than-2' :
                option1()
                break;

              case 'less-than-2' :
                option2()
                break;
            }
          }
        }>
          <option value="default">Select your odds</option>
          <option value="more-than-2">More than 2</option>
          <option value="less-than-2">Less than 2</option>
        </select>
      </div>
      <div>
        <div className="options">
          {bets.map(item =>
            item.odds.map((odd, index) =>
              <div className="bet-container">
                <div className="bet-offer">
                  <p className="bet-name">Name: {item.name}</p>
                  <p className="bet-odds">Odds: {odd.oddsDecimal}</p>
                </div>
                <div className="stake-container">
                  <div
                    className="stake"

                    onMouseOver={
                      event => {
                        event.target.contentEditable = true
                        event.target.focus = true
                      }
                    }

                    onClick={
                      event => {
                        event.target.focus = true
                      }
                    }

                    onBlur={
                      event => {
                        let re = /^(\d+[.]\d{2})$/
                        let valid = re.test(event.target.innerText)
                        if(!valid) {
                          alert('Enter a valid amount, with both pounds and pence. E.g: 5.99')
                          event.target.innerText = 0
                        } else {
                          odd.stake = event.target.innerText
                        }
                      }
                    }
                  >
                    {odd.stake}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <br/>
      <footer>
        <Link to="/bet"
          className="bet-now"
          onClick={
            event => {
              calculateStake()
            }
          }
        >Bet Now</Link>
      </footer>
    </div>
  )
}

export default connect(
  state => ({ bets: state.odds.data, option: state.odds.option }),
  { option1, option2, storeOption, calculateStake }
)(Slip)