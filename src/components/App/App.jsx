import React, { Component } from "react";
import {Intro, Paul, Lexy, ChooseCloth, ButtonBlock} from './App.styled';
import paulImg from '../../imgs/Paul.jpg';
import lexyImg from '../../imgs/Lexy.jpg';
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import Dress from '../../imgs/btnImages/dress.png';
import Short from '../../imgs/btnImages/short.png';
import InDress from '../../imgs/inDress.jpg';
import InShort from '../../imgs/inShort.jpg';



class App extends Component {
  state = {
    chooseCloth: true,
    chooseBag: false,
    chooseGlassJewellery: false,
    choosePlace: false,
    dress: false,
    short: false,
  }

  componentDidUpdate() {

  };

  handleClick = (e) => {
    
    if (e.target.alt === Dress) {
      return (
        this.setState({
          chooseCloth: false,
          dress: true, 
          chooseBag: true,
        })
      )
    }

    this.setState({
      chooseCloth: false,
      short: true, 
      chooseBag: true,
    })
  }

  render() {

    const {chooseCloth, chooseBag, chooseGlassJewellery, choosePlace} = this.state;

    return (
      <div className="App">
        {chooseCloth && (<Intro>
          <Paul src={paulImg} alt="Paul" />
          <Lexy src={lexyImg} alt="Lexy" />

          <ChooseCloth>
            <ButtonContainer onClick={this.handleClick} dress={Dress} short={Short} />      
          </ChooseCloth>
        </Intro>)}

        {dress && (<div>
            {chooseBag && <ButtonContainer onClick={this.handleClick} bag1={Bag1} bag2={Bag2} />}
          </div>)}
      </div>
    );
  }
}

export default App;

