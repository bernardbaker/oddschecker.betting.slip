import React from 'react'
import { connect } from 'react-redux'

function Receipt({ total }) {

  return (
    <div>
      <p>Receipt</p>
      <br/>
      <p>Your bet has been placed</p>
      <br/>
      <p>Total stake: £{parseFloat(total).toFixed(2)}</p>
    </div>
  )
}

export default connect(
  state => ({ total: state.odds.total})
)(Receipt)
