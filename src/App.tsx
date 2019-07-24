import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/friends' component={Friends} />
        </div>
      </BrowserRouter>
    </div>
  )
}

const Home = () => (
    <div>
        <h2>
            Home
        </h2>
        <p>
            Welcome Home.
        </p>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
        <p>フレンズに投票するページです</p>
    </div>
)

const Friends = () => (
    <div>
        <h2>Friends</h2>
        <p>ここにフレンズのリストを書きます</p>
    </div>
)

export default App;
