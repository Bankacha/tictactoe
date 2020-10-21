import React from 'react';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import './TicTac.css'

export default class TicTacToe extends React.Component {

    state = {
        player1: '',
        player2: '',
        isNameSaved: false,
        currentPlayer: 'X',
        matrix: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],

        winner: false
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

    setPlayerName = (name, key) => {
        let newState = {}
        newState[key] = name
        this.setState(newState)
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


    saveName = () => {
        this.setState({
            isNameSaved: true
        })
    }

    
    render() {

        const rows = this.state.matrix.map((r, rIdx) => {
            return (
                <div key={rIdx}>

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

        const noRows = (
            <div>
                <h2 className='text-center'>Fill player names to play</h2>
                <FormControl onChange={(event) => this.setPlayerName(event.target.value, 'player1')} placeholder="player 1"></FormControl>
                <FormControl onChange={(event) => this.setPlayerName(event.target.value, 'player2')} placeholder="player 2"></FormControl>
                <Button onClick={this.saveName}>comirm</Button>
            </div>
        )



        return (
            <div>


                <Row mb={5}className='justify-content-around'><Button  onClick={this.handleclick}>reset</Button></Row>
                <Row md={4} className='justify-content-around'>
                    
                    <Col> <p className='ime'> {this.state.isNameSaved ? this.state.player1 : ''} </p></Col>


                    <Col>
                        {this.state.isNameSaved ? rows : noRows}
                    </Col>

                    <Col> <p className='ime'>{this.state.isNameSaved ? this.state.player2 : ''} </p></Col>

                </Row>
            </div>
        )
    }
}



calculateWinner = (matrica) => {
    
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < combinations.length; i++) {
        const[a,b,c] = combinations[i];
        if(combinations[a] && combinations[a] === combinations[b] && combinations[b] === combinations[c]) {
            return combinations[a]
        }
    }
    
    
    return null;
}
