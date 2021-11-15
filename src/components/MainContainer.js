import React from 'react'

import Title from './TitleComponent'
import Weather from './WeatherComponent'
import FeelingsContainer from './FeelingsComponents/FeelingsContainer'

function MainContainer() {
  return (
    <div>
      <Title />
      <Weather />
      <FeelingsContainer />
    </div>
  )
}

export default MainContainer
