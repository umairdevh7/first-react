import React from 'react'
import Nav from './Nav'
import Section from './Section'
import Quotes from './Quotes'
import Card1 from './Card1'
import Line from './Line'
import Numbers from './Numbers'

const Container = () => {
  return (
    <div className='container'>
        <Nav />
        <Section />
        <Quotes />
        <Card1 />
        <Line />
        <Numbers />
    </div>
  )
}

export default Container