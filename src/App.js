import {useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data,setData]=useState(null)
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [apiUrl]);

  return (
    <div className="App">
   Welcome to my app
          {JSON.stringify(data)}

    </div>
  );
}

export default App;
