import React, {useState} from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import NewsItems from './data/newsItems.json'
import { Helmet } from 'react-helmet';

function App() {
    const [ show, setShow ] = useState(false)
  return (
    <div className="App">
        <Helmet
            title={'DRIP - Drecom Invention Project'}
            meta={[
                { name: 'twitter:card', content: 'summary' },
                { name: 'description', content: 'DRIP - Drecom Invention Projectは、(株)ドリコムの「発明を産み続ける」という挑戦に取り組む活動です。'},
                { property: 'og:image', content: 'https://drip.drecom.co.jp/img/logo2.png' },// NOTE: 本家から引っ張っていることに留意するように
                { property: 'og:title', content: 'DRIP - Drecom Invention Project' },
                { property: 'og:site_name', content: 'DRIP' },
                { property: 'og:type', content: 'website' },
                { property: 'og:description', content: 'DRIP - Drecom Invention Projectは、(株)ドリコムの「発明を産み続ける」という挑戦に取り組む活動です。' },
                { property: 'og:url', content: 'http://drip.drecom.co.jp' },
                { name: 'twitter:card', content: 'summary' }
            ]}
        />
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Header  onMenuButton={() => { show ? setShow(false) : setShow(true) }} showMenu={show}/>
            <Switch>
                <Route exact path='/' render={() => <Home items={NewsItems} onInit={() => setShow(false)}/> } />
                <Route path='/news' render={() => <News items={NewsItems} onInit={() => setShow(false)} /> } />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </HashRouter>
    </div>
  )
}

export default App
