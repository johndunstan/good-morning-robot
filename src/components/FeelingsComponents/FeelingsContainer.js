import React, { useState } from 'react'

import FeelingsQuestion from './FeelingsQuestion'
import FeelingsResponse from './FeelingsResponse'

function FeelingsContainer() {
  const [feeling, setFeeling] = useState('')

  return (
    <div>
      {feeling === '' ? (
        <FeelingsQuestion feeling={feeling} setFeeling={setFeeling} />
      ) : (
        <FeelingsResponse feeling={feeling} />
      )}
    </div>
  )
}

export default FeelingsContainer
