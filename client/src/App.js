import './App.css';
import Greetings from './Greetings';
import Form from './Form';

import logo from './logo.svg';
import {useState, useEffect} from 'react';


const [currentTime, setCurrentTime] = useState(0);
useEffect(() => {
    fetch('/time').then(res => res).then(data =>{
        setCurrentTime(data);
    });
}, []);

const App = () => (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <Greetings firstName='Dashulik' lastName='Smotrova' />
          Not Edit <code>src/App.js</code> and save to reload. I like it
          The current time is {currentTime}
        </p>

      </header>
    </div>
  );

export default App;
