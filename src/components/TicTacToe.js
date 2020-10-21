import React from 'react';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import possibleCombinations from './possible-combinations.json';
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

        winnerPlayer: null,
        winnerCombination: null,

        winner: false
    }

    resetGame = (event) => {
        const newMatrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]

        this.setState({
            matrix: newMatrix,
            winnerCombination: null,
            winnerPlayer: null
        })
    }

    setPlayerName = (name, key) => {
        let newState = {}
        newState[key] = name
        this.setState(newState)
    }



    assignClick = (row, col) => {
        if (this.state.matrix[row][col] === null && !this.state.winnerCombination) {
            const newMatrix = [...this.state.matrix];
            newMatrix[row][col] = this.state.currentPlayer

            this.setState({
                matrix: newMatrix,
                currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
            })

            const winnerCombination = this.calculateWinner();

            if (winnerCombination) {
                this.setState({
                    winnerCombination: winnerCombination.combination,
                    winnerPlayer: winnerCombination.player
                })
            }
        }
    }

    getValueByRowAndCol = (row, col) => {
        return this.state.matrix[row][col];
    }

    getValuesByCombinationArray = (comb) => {
        return comb.map(c => this.getValueByRowAndCol(c[0], c[1]));
    }

    calculateWinner = () => {
        for (let comb of possibleCombinations) {
            // [[0, 0], [0, 1], [0, 2]]  <-- comb

            const values = this.getValuesByCombinationArray(comb);
            // [null, "X", null] // <-- values

            if (values.filter(value => value === null).length === 0) {
                const [first, second, third] = values;

                if (first === second && second === third) {
                    return {
                        combination: comb,
                        player: first === 'X' ? this.state.player1 : this.state.player2
                    };
                }
            }
        }
    }

    saveName = () => {
        this.setState({
            isNameSaved: true
        })
    }

    isInWinningComb = (row, col) => {
        if (this.state.winnerCombination) {
            return !!this.state.winnerCombination.find(field => field[0] === row && field[1] === col);
        }

        return false;
    }


    render() {

        const rows = this.state.matrix.map((r, rIdx) => {
            return (
                <div key={rIdx}>

                    <Row key={rIdx}>
                        {
                            r.map((c, cIdx) => {
                                return (
                                    <Col onClick={() => this.assignClick(rIdx, cIdx)} key={cIdx} md={4}
                                        className={`kontish ${this.isInWinningComb(rIdx, cIdx) ? 'winning' : ''}`}>
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


                <Row mb={5} className='justify-content-around'><Button onClick={this.resetGame}>reset</Button></Row>
                <Row md={4} className='justify-content-around'>

                    <Col> <p className='ime'> {this.state.isNameSaved ? this.state.player1 : ''} </p></Col>


                    <Col>
                        {this.state.isNameSaved ? rows : noRows}
                    </Col>

                    <Col> <p className='ime'>{this.state.isNameSaved ? this.state.player2 : ''} </p></Col>

                </Row>
                <Row>
                    <Col>
                        {
                            this.state.winnerPlayer ? (
                                <h3 className="text-center">Winner is: {this.state.winnerPlayer}</h3>
                            ) : null
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

