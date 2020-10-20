import React from 'react';
import { Navbar } from 'react-bootstrap';


export default class NavBar extends React.Component {


    render() {
        return (
          <Navbar bg="dark">
            <Navbar.Brand>Tic Tac Toe</Navbar.Brand>
          </Navbar>
        )
    }
}