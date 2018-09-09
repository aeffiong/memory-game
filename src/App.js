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
import images from './originalData.json';

// const originalData = [{
//   src: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?h=200&w=200',
//   alt: 'Your description here 1',
//   clicked: false,
//   id: 0

// },
// {
//   src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 2',
//   clicked: false,
//   id: 1
// },
// {
//   src: 'https://images.pexels.com/photos/1161682/pexels-photo-1161682.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 3',
//   clicked: false,
//   id: 2
// },
// {
//   src: 'https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 4',
//   clicked: false,
//   id: 3
// },
// {
//   src: 'https://images.pexels.com/photos/209564/pexels-photo-209564.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 5',
//   clicked: false,
//   id: 4
// },
// {
//   src: 'https://images.pexels.com/photos/793772/pexels-photo-793772.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 6',
//   clicked: false,
//   id: 5
// },
// {
//   src: 'https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 7',
//   clicked: false,
//   id: 6
// },
// {
//   src: 'https://images.pexels.com/photos/979310/pexels-photo-979310.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 8',
//   clicked: false,
//   id: 7
// },
// {
//   src: 'https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 9',
//   clicked: false,
//   id: 8
// },
// {
//   src: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 10',
//   clicked: false,
//   id: 9
// },
// {
//   src: 'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 11',
//   clicked: false,
//   id: 10
// },
// {
//   src: 'https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&h=200&w=200',
//   alt: 'Your description here 12',
//   clicked: false,
//   id: 11
// }
// ]

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
   topScore: 0
 }

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
    }
  }
  else {
    this.setState({ score: 0, idNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });
  }

  const images = shuffle(this.state.images);
  this.setState({ images });
};

 render() {
  return (
    <div className="App">
       <NavBar>
          score={this.state.score}
        </NavBar>
       <Jumbotron/>
      <Container>
        <Row>
          <Col size="md-8">
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
          </Col>
        </Row>
      </Container>
       <Footer/>
     </div>
   );
}
}

export default App;