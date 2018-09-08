import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css'
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import './components/ImageCard.css';
import './components/Jumbotron.css';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';

const originalData = [{
    src: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?h=200&w=150',
    alt: 'Your description here 1',
    clicked: false,
    id: 0

  },
  {
    src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&h=200&w=150',
    alt: 'Your description here 2',
    clicked: false,
    id: 1
  },
  {
    src: 'https://images.pexels.com/photos/1161682/pexels-photo-1161682.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 3',
    clicked: false,
    id: 2
  },
  {
    src: 'https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 4',
    clicked: false,
    id: 3
  },
  {
    src: 'https://images.pexels.com/photos/209564/pexels-photo-209564.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 5',
    clicked: false,
    id: 4
  },
  {
    src: 'https://images.pexels.com/photos/793772/pexels-photo-793772.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 6',
    clicked: false,
    id: 5
  },
  {
    src: 'https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 7',
    clicked: false,
    id: 6
  },
  {
    src: 'https://images.pexels.com/photos/979310/pexels-photo-979310.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 8',
    clicked: false,
    id: 7
  },
  {
    src: 'https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 9',
    clicked: false,
    id: 8
  },
  {
    src: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 10',
    clicked: false,
    id: 9
  },
  {
    src: 'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 11',
    clicked: false,
    id: 10
  },
  {
    src: 'https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&h=100&w=100',
    alt: 'Your description here 12',
    clicked: false,
    id: 11
  }
]


class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    data: originalData,
  };

resetGame = () => {
  this.setState (
    {
      currentScore: 0,
      data: originalData
    }
  )
}
  

  handleClick = (event) => {
    const data = this.state.data;
    const id = event.target.id
    ///filteres thourgh data and got a new array of the filtered data
    const newData = findDataAndFormatArray.call(this, data);
    console.log("New Data");
    console.log(newData);

    //randomize our array (fisher yates rando algo)
    const shuffledData = shuffleArray(newData)
    console.log("Shuffled Data")
    console.log(shuffledData);
    
    //tell the screen to update
    this.setState({
      data: shuffledData
    });

    //FUNCTIONS:::::::::::::::::
    function findDataAndFormatArray(data) {
      console.log("Original Data")
      console.log(originalData)
      var newData = [];
      for (let i = 0; i < data.length; i++) {
        if(data[i].id === parseInt(id)){
          if (data[i].clicked == true) {
            console.log("ouch you already clicked this");
            resetGame();
            console.log("original data after clicked twice")
            console.log(newData);
          }
          data[i].clicked = true
          console.log(data[i]);
          newData.push(data[i])
        }else{
          newData.push(data[i])
        }
      }
      
      return newData
    }

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Jumbotron/>
        <Container>
            <Col size="md-8">
              <ImageCard handleClick={this.handleClick} data={this.state.data}/>
            </Col>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;

// image card
{props.data.map(function(imageProps) {
  return (
      <div className="card col-sm-2" id={imageProps.id} key={ imageProps.src} onClick={props.handleClick}>
          <img src={ imageProps.src} id={imageProps.id} alt={ imageProps.alt} />
      </div>
  )
})}