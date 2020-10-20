import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';


export default class Layout extends React.Component {


    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Container className='justify-content-around'>
                    {this.props.children}
                </Container>
            </div>
        )

    }
}