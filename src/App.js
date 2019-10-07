import React from 'react';
import Main from './pages/main';

import Routes from './routes';

import './styles.css';

import Header from './components/Header';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
    </div>
);


export default App;
