import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/news' component={News} />
                <Route component={PageNotFound} />
            </Switch>
        </HashRouter>
    </div>
  )
}

export default App
