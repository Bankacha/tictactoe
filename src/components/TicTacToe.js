import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './TicTac.css'

export default class TicTacToe extends React.Component {

    state = {
        currentPlayer: 'X',
        matrix: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }

    handleclick = (event) => {
        const newMatrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.setState({
            matrix: newMatrix
        })
    }


    assignClick = (row, col) => {
        if (this.state.matrix[row][col] === null) {
            const newMatrix = [...this.state.matrix];
            newMatrix[row][col] = this.state.currentPlayer

            this.setState({
                matrix: newMatrix,
                currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
            })
        }
    }

    render() {

        const rows = this.state.matrix.map((r, rIdx) => {
            return (
                <div>

                    <Row key={rIdx}>
                        {
                            r.map((c, cIdx) => {
                                return (
                                    <Col onClick={() => this.assignClick(rIdx, cIdx)} key={cIdx} md={4} className='kontish'>
                                        <h1 className='text-center'>{c ? c : 'c'}</h1>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </div>
            )
        })

        return (
            <div>
                <Button onClick={this.handleclick}>reset</Button>
                <Row md={4} className='justify-content-around'>
                    <Col>
                        {rows}
                    </Col>
                </Row>
            </div>
        )
    }
}