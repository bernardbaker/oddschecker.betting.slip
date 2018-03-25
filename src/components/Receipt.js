import React from 'react'
import { connect } from 'react-redux'
import './Styles.css'

function Receipt({ total }) {

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
        <p>Your bet has been placed</p>
        <br/>
        <p>Total stake: <span className="receipt-total">£{parseFloat(total).toFixed(2)}</span></p>
      </div>
    </div>
  )
}

export default connect(
  state => ({ total: state.odds.total})
)(Receipt)
