import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        {/* <Greet name="nigga #1" ign="nigga#1">
          <p>This is a paragraph children.</p>
        </Greet>
        <Greet name="nigga #2" ign="nigga#2">
          <button>Test button</button>
        </Greet>
        <Greet name="nigga #3" ign="nigga#3"/>
        <Welcome name="nigga #1" ign="nigga#1"/>
        <Welcome name="nigga #2" ign="nigga#2"/>
        <Welcome name="nigga #3" ign="nigga#3"/> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
