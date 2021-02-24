import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import React, {useState} from 'react'

function App() {

  // const buttonClicked = true

  const [buttonClicked, setToggleState] = useState(false)

  const changeText = () => {

    setToggleState(buttonClicked == true ? false : true)

    console.log('Im Clicked');
  }


  

  return (
    <div className="App">
      <Header title={"Hello World React App."} />

      <h1>Hello {buttonClicked ? "Button" : "World"}!</h1>

      <h3>Click the below-button to change above-text </h3>

      <Button cls='my-btn' text='Click Me' clickevnt={changeText} />
    </div>
  );
}

export default App;
