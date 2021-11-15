import React, { useState, useContext } from 'react'
import FeelingsResponse from './FeelingsResponse'

function FeelingsQuestion(props) {
  // const [feeling, setFeeling] = useState('')

  function handleSubmit(e) {
    // setFeeling(e.value)
    alert(`You are feeling ${props.feeling.toLowerCase()}!`)
    e.preventDefault()
  }

  return (
    <div>
      <form>
        <h3>How are you feeling?</h3>

        <input
          type="submit"
          value="Joyful"
          onClick={(e) => props.setFeeling(e.target.value)}
        />
        <input
          type="submit"
          value="Sad"
          onClick={(e) => props.setFeeling(e.target.value)}
        />
        <input
          type="submit"
          value="Afraid"
          onClick={(e) => props.setFeeling(e.target.value)}
        />
        <input
          type="submit"
          value="Angry"
          onClick={(e) => props.setFeeling(e.target.value)}
        />
        <input
          type="submit"
          value="Surprised"
          onClick={(e) => props.setFeeling(e.target.value)}
        />
        <input
          type="submit"
          value="Disgusted"
          onClick={(e) => props.setFeeling(e.target.value)}
        />
      </form>
    </div>
  )
}

export default FeelingsQuestion
