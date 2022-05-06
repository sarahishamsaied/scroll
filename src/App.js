import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'
export default function App() {
  const match = window.matchMedia("(max-width:991px)")
  console.log(match)
  return match.matches?<Mobile/>:<Desktop/>
}
