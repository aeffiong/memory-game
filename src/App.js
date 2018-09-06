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

var originalData = [{
    src: 'https://www.pexels.com/photo/assorted-sliced-fruits-1128678/',
    alt: 'Your description here 1',
    clicked: false,
    id: 0

  },
  {
    src: 'https://www.pexels.com/photo/assorted-sliced-fruits-in-white-ceramic-bowl-1092730/',
    alt: 'Your description here 2',
    clicked: false,
    id: 1
  },
  {
    src: 'http://placehold.it/200x200/76BD23',
    alt: 'Your description here 3',
    clicked: false,
    id: 2
  },
  {
    src: 'http://placehold.it/200x200/76BD24',
    alt: 'Your description here 4',
    clicked: false,
    id: 3
  },
  {
    src: 'http://placehold.it/200x200/76BD25',
    alt: 'Your description here 5',
    clicked: false,
    id: 4
  },
  {
    src: 'http://placehold.it/200x200/76BD26',
    alt: 'Your description here 6',
    clicked: false,
    id: 5
  },
  {
    src: 'http://placehold.it/200x200/76BD27',
    alt: 'Your description here 7',
    clicked: false,
    id: 6
  },
  {
    src: 'http://placehold.it/200x200/76BD28',
    alt: 'Your description here 8',
    clicked: false,
    id: 7
  },
  {
    src: 'http://placehold.it/200x200/76BD29',
    alt: 'Your description here 9',
    clicked: false,
    id: 8
  },
  {
    src: 'http://placehold.it/200x200/76BD210',
    alt: 'Your description here 10',
    clicked: false,
    id: 9
  },
  {
    src: 'http://placehold.it/200x200/76BD211',
    alt: 'Your description here 11',
    clicked: false,
    id: 10
  },
  {
    src: 'http://placehold.it/200x200/76BD212',
    alt: 'Your description here 12',
    clicked: false,
    id: 11
  }
]


class App extends Component {
  state = {
    data: originalData
  }
  

  handleClick = (event) => {
    var data = this.state.data;
    var id = event.target.id
    ///filteres thourgh data and got a new array of the filtered data
    var newData = findDataAndFormatArray.call(this, data)
    console.log(newData);

    //randomize our array (fisher yates rando algo)
    var shuffledData = shuffleArray(newData)
    console.log(shuffledData);
    
    //tell the screen to update
    this.setState({
      data: shuffledData
    });

    //FUNCTIONS:::::::::::::::::
    function findDataAndFormatArray(data) {
      console.log(originalData)
      var newData = [];
      for (let i = 0; i < data.length; i++) {
        if(data[i].id === parseInt(id)){
          if (data[i].clicked == true) {
            console.log("ouch you already clicked this");
            this.setState({
              data: originalData
            });
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
          <Row>
            <Col size="md-8">
              <ImageCard handleClick={this.handleClick} data={this.state.data}/>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;