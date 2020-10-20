import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './TicTac.css'

export default class TicTacToe extends React.Component {

    render() {
        return (

            <Row md={4} className='justify-content-center'>
                <Col>
                    <Row md={4}>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                    </Row>
                    <Row md={4}>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                    </Row>
                    <Row md={4}>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                        <Col className='kontish'>
                            <h1 className='text-center'>X</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}