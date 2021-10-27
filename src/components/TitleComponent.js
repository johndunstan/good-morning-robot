import React, { useState } from 'react'

function Title() {
  const [name, setName] = useState('Name')

  return <h2>Good morning, {name}!</h2>
}

export default Title
