import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
 const Sidebar = ({activeSections}) => {
   const {aboutUs,ourClients,portfolio} = {...activeSections};
   console.log(aboutUs,ourClients,portfolio)
  return   <Navbar bg="transparent" variant="dark" className='sidebar'>
  <Container>
  <Nav className="m-auto">
  <Nav.Link href="#aboutUsContainer"   className={aboutUs?'link pink ':'link text-primary'}>About us</Nav.Link>
    <Nav.Link href="#fivesContainer" className={ourClients?'link pink': 'link text-primary'}>Our clients</Nav.Link>
    <Nav.Link href="#sec3Container" className={portfolio?'link pink ':'link text-primary'}>Portfolio</Nav.Link>
  </Nav>
  </Container>
</Navbar>
}
export default Sidebar
