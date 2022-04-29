import React from 'react'
import logo from './scheddar.png';


const Header = ({counter}) => {
  return  <div className='header'>
  <div className='logo'>
  <img src={logo} alt = "logo" className='logoImg'/>
  </div>
      <h1>{counter}/03</h1>
      <h1>contact us</h1>
</div>
}
export default Header
 