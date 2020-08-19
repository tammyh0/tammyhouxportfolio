import React from 'react'
import './css/App.css'
import './css/Work.css'
import './css/About.css'
import './css/Resume.css'
import './css/CocoBot.css'
import './css/Rumi.css'
import './css/Expedia.css'
import './css/Plantable.css'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import Work from './js/Work'
import About from './js/About'
import Resume from './js/Resume'
import CocoBot from './js/CocoBot'
import Rumi from './js/Rumi'
import Expedia from './js/Expedia'
import Plantable from './js/Plantable'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"


function App() {
  return <BrowserRouter>
    <div className="Container">
      <header className="Nav-container">

        <div className="Nav-logo">
          <Link exact to="/">TAMMY HO</Link>
        </div>

        <div className="Nav-bar">
            <NavLink exact className="Tab Work-tab" to="/" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Work
            </NavLink>

            <NavLink className="Tab About-tab" to="/about" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>About
            </NavLink>

            <a className="Tab Resume-tab" href="https://drive.google.com/file/d/1UILe45gWE_gLoEFv9u_Yubb6wilAUEAf/view?usp=sharing" target="_blank" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Resume
            </a>
            {/*<NavLink className="Tab Resume-tab" to="/resume" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Resume
            </NavLink>*/}
        </div>
      </header>

      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
          >
            <Switch>
              <Route path="/" exact component={Work} />
              <Route path="/about" component={About} />
              {/*<Route path="/resume" component={Resume} />*/}


              <Route path="/cocobot" component={CocoBot} />
              <Route path="/rumi" component={Rumi} />
              <Route path="/expedia" component={Expedia} />
              <Route path="/plantable" component={Plantable} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />

      <footer className="Footer">
        <ScrollUpButton style={{backgroundColor: "none", fill: "#999999"}}/>

        <div className="Footer-contact">
          <p className="Footer-contact-phrase">☺︎ SAY HELLO</p>
          <p className="Footer-last-line">
            <a className="Footer-contact-link" href="mailto:tammyhho98@gmail.com?Subject=Hi%20Tammy!" target="_top">tammyhho98@gmail.com</a>
            <span className="Copyright">designed + coded by me 👩🏻‍💻</span>
          </p> 
        </div>

      </footer>

    </div>
  
  </BrowserRouter>
}

export default App;
