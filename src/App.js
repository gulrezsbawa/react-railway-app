import {useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
   // eslint-disable-next-line
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data,setData]=useState(null)
   // eslint-disable-next-line
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {JSON.stringify(data)}
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
