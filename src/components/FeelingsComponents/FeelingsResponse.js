import React from 'react'

function FeelingsResponse(props) {
  return (
    <div>
      <h3>You feel {props.feeling.toLowerCase()}. You doing okay, buddy?</h3>
    </div>
  )
}

export default FeelingsResponse
