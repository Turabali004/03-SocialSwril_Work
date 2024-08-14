import React from 'react'

function HeroChild({someData}) {
  return (
    <div>
      This is Hero Child Component
      <h1>{someData.name}</h1>
      <h1>{someData.expertise}</h1>
    </div>
  )
}

export default HeroChild
