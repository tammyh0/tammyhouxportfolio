import React from 'react'
import './css/App.css'
import './css/Work.css'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import Work from './js/Work'
import About from './js/About'
import Resume from './js/Resume'
import { CSSTransition, TransitionGroup} from 'react-transition-group'


function App() {
  return <BrowserRouter>
    <div className="Container">
      <header className="Nav-container">

        <div className="Nav-logo">
          <Link exact to="/">TAMMY HO</Link>
        </div>

        <div className="Nav-bar">
            <NavLink exact className="Work-tab" to="/" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Work
            </NavLink>

            <NavLink className="About-tab" to="/about" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>About
            </NavLink>

            <NavLink className="Resume-tab" to="/resume" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Resume
            </NavLink>
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
              <Route path="/resume" component={Resume} />


              {/*<Route path="/CocoBot" component={CocoBot} />
              <Route path="/rumi" component={Rumi} />
              <Route path="/expedia" component={Expedia} />
              <Route path="/plantable" component={Plantable} />*/}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />

    </div>
  
  </BrowserRouter>
}

export default App;
