import React, { useState, useContext } from 'react'

function Title() {
  const [name, setName] = useState('John')
  let current = new Date()
  let hours = current.getHours()
  let seconds = current.getSeconds()
  //TODO: Add logic statement to determine if time is morning, evening, etc.

  return (
    <>
      <h2>Good morning{name === '' ? null : ', ' + name}!</h2>
      <h3>
        Hour is: {hours} | Seconds are: {seconds}
      </h3>
    </>
  )
}

export default Title
