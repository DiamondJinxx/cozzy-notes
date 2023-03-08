import './App.css';
import Greetings from './Greetings';
import Form from './Form';

import logo from './logo.svg';

const App = () => (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <Greetings firstName='Dashulik' lastName='Smotrova' />
          Not Edit <code>src/App.js</code> and save to reload. I like it
        </p>
        <Form/>
      </header>
    </div>
  );

export default App;
