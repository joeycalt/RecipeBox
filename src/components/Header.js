import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { House } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src='https://i.im.ge/2022/12/20/qlD2i4.Logo-RecipeBox.png' height='40px' width='140px' alt=''></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
            <Nav.Link className='resume-button' href="" target="_blank" rel="noreferrer" type="application/pdf" media="print">
              </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
  }
  
  export default Header