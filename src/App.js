import {Component, React} from 'react';
import logo from './logo.svg';
import { subscribeToTimer } from './api';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
  
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }))
  }

  state = {
    timestamp: 'no timestamp yet'
  };

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Time: {this.state.timestamp}</h1>
      </header>
    </div>
  );
}
}

export default App;
