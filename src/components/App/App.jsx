import React, { Component } from "react";
import {Intro, Paul, Lexy, ChooseCloth, ButtonBlock} from './App.styled';
import paulImg from '../../imgs/Paul.jpg';
import lexyImg from '../../imgs/Lexy.jpg';

class App extends Component {
  state = {
    dress: null,
  }
  render() {
    return (
      <div className="App">
        <Intro>
          <Paul src={paulImg} alt="Paul" />
          <Lexy src={lexyImg} alt="Lexy" />

          <ChooseCloth>
            <ButtonBlock>
              <button>
                <img src="../../imgs/btnImages/dress" alt="dress"/>
              </button>
              <button>
                <img src="../../imgs/btnImages/short" alt="short"/>
              </button>  
            </ButtonBlock>            
          </ChooseCloth>
        </Intro>
      </div>
    );
  }
}

export default App;

