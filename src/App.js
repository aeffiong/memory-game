import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css'
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import './components/ImageCard.css';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Jumbotron/>
        <Container>
          <Row>
            <Col size="md-8">
              <ImageCard/>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
