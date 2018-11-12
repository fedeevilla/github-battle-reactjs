import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import './App.css';
import Container from './components/Container';




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
            <Col xs={12} md={6}>
              <Container id={1}></Container>
            </Col>
            <Col xs={12} md={6}>
              <Container id={2}></Container>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button variant="contained" size="large" color="primary" >Battle!</Button>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
