import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
    render() {
        return (
            < div >
                <img src={this.props.data.avatar_url} alt="" width="100px"></img>
                <h3>{this.props.data.name}</h3>
                <h4>{this.props.data.location}</h4>
                <p>@{this.props.data.login}</p>
                <p>#{this.props.data.id}</p>
                {
                    this.props.data.email &&
                    <p>{this.props.data.email} </p>
                }
                <p>Followers: {this.props.data.followers}</p>
                <p>Following: {this.props.data.following}</p>
                <p>Public Repos: {this.props.data.public_repos}</p>

            </div>
        );
    }
}

Player.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Player;