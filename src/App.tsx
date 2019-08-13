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
    // const newsItems: INewsItem[] = [
    //     {
    //         day: '2019/04/24',
    //         title: 'AROW',
    //         message: 'AROW Developer Meetup Vol.2 を開催しました！',
    //         link: 'https://arow-3dmap.connpass.com/event/127377/'
    //     },
    //     {
    //         day: '2019/04/23',
    //         title: 'AROW',
    //         message: 'AROW オープンテストバージョンリリースしました！',
    //         link: 'https://arow.world/ja/'
    //     }
    // ]

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
