import logo from './logo.svg';
import './App.css';
import Bgcolor from './Conponants/Bgcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#2F4F4F")
  return (
    <div className='wholebody' style={{ backgroundColor: color }}>

      <div>


        <div className='buttons'>
          <button onClick={() =>  setColor("white" ,<h1>white</h1>) } style={{ background: "white" }}>White</button>
          <button onClick={() => setColor("black" ,<h1>white</h1>)} style={{ background: "black", color: "white" }}>Black</button>
          <button onClick={() => setColor("green")} style={{ background: "green" }}>Green</button>
          <button onClick={() => setColor("yellow")} style={{ background: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("blue")} style={{ background: "blue" }}>Blue</button>
          <button onClick={() => setColor("orange")} style={{ background: "orange" }}>Orange</button>
          <button onClick={() => setColor("brown")} style={{ background: "brown" }}>Brown</button>
          <button onClick={() => setColor("grey")} style={{ background: "grey" }}>Grey</button>
          <button onClick={() => setColor("red")} style={{ background: "red" }}>Red</button>
          <button onClick={() => setColor("aqua")} style={{ background: "aqua" }}>Aqua</button>
          <button onClick={() => setColor("#FF1493")} style={{ background: "pink" }}>G-Color</button>






        </div>
        
        

      </div>


    </div>
    
  );
}

export default App;
