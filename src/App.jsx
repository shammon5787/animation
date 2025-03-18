import React, { useState } from 'react'
import Animation from './Background/Animation'
import Hero from './Background/Hero'

const App = () => {
  const herodata = [
    {text1: 'BMW', text2: 'This is new BMW'},
    {text1: 'VItz', text2: 'This is new Vits'},
    {text1: 'Pious', text2: 'This is new Pious'},
  ]
  const [playstatus, setplayStatus] = useState(true)
  const [hercount, setherocount] = useState(0)
  return (
    <div>
      <Animation playstatus = {playstatus} hercount = {hercount} />
      <Hero playstatus = {playstatus} hercount = {hercount} herodata = {herodata[hercount]} setherocount = {setherocount} setplayStatus = {setplayStatus} />
    </div>
  )
}

export default App