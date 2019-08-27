import React, { useState } from 'react'
import './App.scss'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import News from './pages/News'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import NewsItems from './data/newsItems.json'
import HelmetWrap from './components/HelmetWrap'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <HelmetWrap />
      {/*eslint no-undef: "error"*/}
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header
          onMenuButton={() => {
            show ? setShow(false) : setShow(true)
          }}
          showMenu={show}
        />
        <Switch>
          <Route exact path="/" render={() => <Home items={NewsItems} onInit={() => setShow(false)} />} />
          <Route path="/news" render={() => <News items={NewsItems} onInit={() => setShow(false)} />} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
