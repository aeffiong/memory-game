import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import originalData from "./originalData.json";



class App extends Component {
  state = {
    originalData
  };
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Jumbotron/>
        <Container>
            {this.state.originalData.map(pic => (
              <ImageCard
                id={pic.id}
                key={pic.id}
                src={pic.src}
                alt={pic.alt}
              />
            ))}
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;