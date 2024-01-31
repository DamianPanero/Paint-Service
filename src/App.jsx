import React, { useState } from 'react';

import './App.css'
const background=<img src='../src/resources/fondo.jpg' alt="fondo" className='Background'/>
const Colors=["Aquamarine","Blueviolet","Azure","cyan","Tomato","lightgrey","greenyellow","lightsalmon","lightpink","skyblue"];



function App() {
  const [color,setColor]=useState("white");
  const divStyle={backgroundColor:color};
  
  return (
    <>
    
      <div className="heading">
        {background}
        <h1>DO YOU WANT TO REDESING YOUR OLD WALLS?!</h1>
        <p>We have an extensive variety of colors from where you can pick and give new life to your old and boring walls</p>
        <br/>
        <h2>Take a look and pick what you like!</h2>
      </div>
      <div className="container">
      <p>Test the colors with our pallet display</p>
      <div className="card" style={divStyle}></div>
      <p>The color you selected is: {color} <a href='#'>&#128722;</a></p>
      <div className="buttons">
      {Colors.map((colorName)=>(<button onClick={()=>
      setColor(colorName)}
      key={colorName} className="button">{colorName}</button>))}
      </div>
    </div>
    </>
  );
}

export default App
