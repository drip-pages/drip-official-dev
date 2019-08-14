import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import NewsItems from './data/newsItems.json'

function App() {
  return (
    <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
                <Route exact path='/' render={() => <Home items={NewsItems} /> } />
                <Route path='/news' render={() => <News items={NewsItems} /> } />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </HashRouter>
    </div>
  )
}

export default App
