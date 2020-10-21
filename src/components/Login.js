import React from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';


export default class Login extends React.Component {

    

    render() {

        return (
            <div>
                <Row>
                    <Col md={3}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">P1</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl value={this.props.gameLog.player1}/>
                        </InputGroup>
                    </Col>
                    <Col md={3}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">P2</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl value={this.props.gameLog.player2} />
                        </InputGroup>
                    </Col>
                </Row>

            </div>
        )
    }

}