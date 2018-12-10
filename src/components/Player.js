import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import { Grid, Col, Row } from 'react-flexbox-grid';

const avatarStyle = {
   width: "100px",
   margin: "20px"
  };

const Player = (props) => {

    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                        <TextField
                            label="GitHub Username"
                            type="search"
                            margin="normal"
                            variant="outlined"
                            value= {props.login}
                            onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                    props.handleSearchPlayer(ev.target.value, props.id);
                                    ev.preventDefault();
                                }
                            }}
                        />
                        <Button variant="contained" size="small" color="secondary" onClick={() => props.deletePlayer(props.id)}>Delete</Button>
                    </Col>
                </Row>                
                <Row>
                    <Col xs={12} md={6}>
            
                        {props.player &&
                            <div >
                                <img style={avatarStyle}
                                    alt={props.player.name}
                                    src={props.player.avatar_url}
                                />
                                <p>{props.player.name}</p>
                                <p>{props.player.location}</p>
                                <p>@{props.player.login}</p>
                                <p>#{props.player.id}</p>
                                {
                                    props.player.email &&
                                    <p>{props.player.email} </p>
                                }
                                <p>Followers: {props.player.followers}</p>
                                <p>Following: {props.player.following}</p>
                                <p>Public Repos: {props.player.public_repos}</p>
                            </div>}
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}


Player.propTypes = {
    id: PropTypes.number.isRequired,
    player: PropTypes.array.isRequired,
    handleSearchPlayer: PropTypes.func.isRequired,
    deletePlayer: PropTypes.func.isRequired,
};

export default Player;