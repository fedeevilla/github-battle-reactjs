import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import './App.css';
import PlayerContainer from './components/PlayerContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  GitHub Battle
              </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col>
              <PlayerContainer></PlayerContainer>
            </Col>
          </Row>

        </Grid >

      </div >
    );
  }
}

export default App;
