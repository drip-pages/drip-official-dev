import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/friends' component={Friends} />
        </Switch>
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
