import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavbarComponent = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>CRUD Contacts</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto' />
            <Nav>
              <Nav.Link href='./'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <br />
    </div>
  )
}

export default NavbarComponent
