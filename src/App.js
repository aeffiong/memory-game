import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import Container from './components/Container';
import Row from './components/Row';
import images from './originalData.json';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const initialState = images;

class App extends Component {
  // setting the inital state
 state = {
   images,
   idNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
   score: 0,
 }
// shuffling the cards and conditional rendering
 shuffleImages = id => {
  if (this.state.idNums.includes(id)) {
    const idNums = this.state.idNums.filter(item => item !== id);
    if (idNums.length < 1) {
      const score = this.state.score + 1;
      this.setState({ score });
      const images = shuffle(initialState);
      this.setState({ images, score: 0, idNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });
    }
    else {
      this.setState({ idNums });
      const score = this.state.score + 1;
      this.setState({ score });
      console.log(score);
      if(score === 12) {
        alert("You win!");
        this.setState({ score: 0, idNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });
      }
    }
  }
  else {
    alert("You lose!");
    this.setState({ score: 0, idNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });
  }

  const images = shuffle(this.state.images);
  this.setState({ images });
};

 render() {
  return (
    <div className="App">
       <NavBar
        score={this.state.score}
        />
       <Jumbotron/>
      <Container>
        <Row>
          {this.state.images.map(image => (
            <ImageCard
            shuffleImages={this.shuffleImages}
            clicked={image.clicked}
            id={image.id}
            key={image.id}
            src={image.src}
            alt={image.alt}
          />
          ))}
        </Row>
      </Container>
       <Footer/>
     </div>
   );
}
}

export default App;