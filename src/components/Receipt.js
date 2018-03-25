import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { betAgain, option1, option2 } from '../actions/data'
import './Styles.css'

function Receipt({ total, betAgain, option1, option2 }) {

  return (
    <div
      className="bet-slip-container receipt"
    >
      <div>
        <p
          className="title"
        >
          Betslip Receipt
        </p>
        <br/>
        { total === 0 ? 
          <p>You have not placed any stakes</p>
          :
          <p>Your bet has been placed</p>
        }
        <br/>
        <p>Total stake: <span className="receipt-total">£{parseFloat(total).toFixed(2)}</span></p>
        { total === 0 ? 
          <Link to="/"
            className="bet-now place-stake"
          >Place a stake</Link>
          :
          <Link to="/"
            onClick={
              event => {
                betAgain()
                //option2()
                //option1()
              }
            }
            className="bet-now bet-again"
          >Bet Again</Link>
        }

      </div>
    </div>
  )
}

export default connect(
  state => ({ total: state.odds.total}),
  { betAgain, option1, option2 }
)(Receipt)
