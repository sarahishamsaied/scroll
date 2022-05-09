import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

 const Sidebar = ({activeSections}) => {
   const {aboutUs,ourClients,portfolio} = {...activeSections};
  return   <Navbar bg="transparent" variant="dark" className='sidebar'>
  <Container>
  <Nav className="m-auto">
  <Nav.Link   onClick={()=>{window.scrollTo({
    top:0,
    behavior:'smooth'
  })}} href = "#aboutUs" className={aboutUs?'link pink ':'link text-primary'}>About us</Nav.Link>
    <Nav.Link href="#fivesContainer" className={ourClients?'link pink': 'link text-primary'}>Our clients</Nav.Link>
    <Nav.Link href="#ourServices" className={portfolio?'link pink ':'link text-primary'}>Portfolio</Nav.Link>
  </Nav>
  </Container>
</Navbar>
}
export default Sidebar
