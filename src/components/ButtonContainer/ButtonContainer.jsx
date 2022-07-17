import React, { Component } from "react";

const ButtonContainer = ({onClick, dress, short}) => {

    return (
        <div>
            <button onClick={onClick} type="button">
                <img src={dress} alt={dress}/>
              </button>
              <button onClick={onClick} type="button">
                <img src={short} alt={short}/>
              </button>  
        </div>          
    )
}

export default ButtonContainer;