import React from 'react'
import HomeButton from './components/HomeButton'
import MainContent from './components/MainContent'
import Container from './components/Container'
const App = () => {
  return (
    <div id="main">
      <HomeButton />
      <MainContent />
      <Container />
    </div>
  )
}

export default App