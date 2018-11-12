import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Player from './Player';

const id = '84578f19a9a926634249';
const sec = '502dc7203598a42426d1e277384404091c24d88c';
const params = `?client_id=${id}&client_secret=${sec}`;

class Container extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    handleSearchPlayer = (username) => {

        const url_ = `http://api.github.com/users/${username}${params}`;
        axios.get(url_).then(response => { this.setState({ data: response.data }) });
    };

    
    render() {
        const { data } = this.state;
        return (
            <div>
                <TextField
                    id={id}
                    label="GitHub User"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            this.handleSearchPlayer(this.state.value);
                            ev.preventDefault();
                        }
                    }}
                />
                {data.id &&
                    <Player data={this.state.data}></Player>}
            </div >
        );
    };
};


Container.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Container;