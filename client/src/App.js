import logo from './logo.svg';
import axios from 'axios'
import './App.css';

function App() {
  const view = async () => {
    let people = await axios.get("https://swapi.dev/api/people/1");
    console.log(people.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {view().toString()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
