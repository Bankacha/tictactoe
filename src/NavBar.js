import React from 'react';
import { Navbar } from 'react-bootstrap';


export default class NavBar extends React.Component {


    render() {
        return (
          <Navbar bg="dark">
            <Navbar.Brand className='text-light text-center w-100 m-0'>Tic Tac Toe</Navbar.Brand>
          </Navbar>
        )
    }
}