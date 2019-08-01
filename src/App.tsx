import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </HashRouter>
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
        <Header />
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
        <p>フレンズに投票するページです</p>
    </div>
)

const PageNotFound = () => (
    <div>
        <h2>Page not found</h2>
        <p>the path {window.location.pathname} did not match any React Router routes.</p>
    </div>
)

export default App;
