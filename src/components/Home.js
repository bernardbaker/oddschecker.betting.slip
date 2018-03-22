import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { option1, option2 } from '../actions/data'

function Home({ number, foo, data, increase, decrease, option1, option2}) {

  return (
    <div>
      Some state changes:
      {number}
      <br/>
      {foo}
      <br/>
      {data}
      <br/>
      <button onClick={() => option1()}>Get Data 1</button>
      <button onClick={() => option2()}>Get Data 2</button>
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number, foo: state.foo.bar, data: state.foo.data }),
  { increase, decrease, option1, option2 }
)(Home)
