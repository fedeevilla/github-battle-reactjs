import React, { Component } from 'react';
import Player from './Player';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress'

const id_ = '84578f19a9a926634249';
const sec = '502dc7203598a42426d1e277384404091c24d88c';
const params = `?client_id=${id_}&client_secret=${sec}`;


class PlayerContainer extends Component {

    constructor() {
        super();

        this.state = {
            player1: null,
            player2: null,
            loading: false,
        }
    }

    handleSearchPlayer = (username, id) => {

        this.setState({ loading: true });

        const url_ = `http://api.github.com/users/${username}${params}`;
        axios.get(url_).then(response => {


            if (id === 1)
                this.setState({
                    player1: response.data,
                    loading: false
                })
            else
                this.setState({
                    player2: response.data,
                    loading: false
                })

        }).catch((error) => {
            alert(error.response.statusText);
            this.setState({
                loading: false,
            });
        });
    }

    deletePlayer = (id) => {

        if (id === 1)
            this.setState({ player1: null })
        else
            this.setState({ player2: null })
    }

    getBattle = () => {

        if (this.state.player1.public_repos === this.state.player2.public_repos)
            alert("It's a TIE!");
        else {
            if (this.state.player1.public_repos > this.state.player2.public_repos)
                alert("Winner: " + this.state.player1.name + " (@" + this.state.player1.login + ")");
            else
                alert("Winner: " + this.state.player2.name + " (@" + this.state.player2.login + ")");
        }
    }

    render() {
        return (
            <Grid>
                {this.state.loading && <LinearProgress variant="query" />}
                <br />
                <Row>
                    <Col xs={12} md={6}>
                        <Player id={1} player={this.state.player1}
                            handleSearchPlayer={this.handleSearchPlayer}
                            deletePlayer={this.deletePlayer}
                        ></Player>
                    </Col>
                    <Col xs={12} md={6}>
                        <Player id={2} player={this.state.player2}
                            handleSearchPlayer={this.handleSearchPlayer}
                            deletePlayer={this.deletePlayer}
                        ></Player>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {this.state.player1 && this.state.player2 &&
                            <Button variant="contained" size="large" color="primary" onClick={this.getBattle}>Battle!</Button>}
                    </Col>
                </Row>
            </Grid>
        )
    }
};



export default PlayerContainer;