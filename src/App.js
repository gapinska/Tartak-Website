import React, { Component } from "react"
import "./App.scss"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom"
import Logo from "./img/logo.png"
import Burger from "./img/burger-4.png"
import MenuClose from "./img/menu-close.png"
import Home from "./Components/Home/Home"
import AboutUs from "./Components/AboutUs/AboutUs"

const Products = () => <h1>Produkty</h1>
const Contact = () => <h1>Kontakt</h1>

class App extends Component {
  state = {
    toogleMenu: false,
  }

  handleToogleMenu = () => {
    this.setState({
      toogleMenu: !this.state.toogleMenu,
    })
  }

  render() {
    const menuStatus = this.state.toogleMenu,
      manuStatusClass = menuStatus ? "nav" : "nav  active"
    return (
      <>
        <Router>
          <div className="main-content">
            <div className="menu-wrapper">
              <div className="menu">
                <nav className={manuStatusClass}>
                  <div className="logo">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="text-logo">TARTAK LORKI</div>
                  <div
                    className="burger-nav-wrapper"
                    onClick={this.handleToogleMenu}
                  >
                    <button className="burger-nav">
                      <img className="menu-open" src={Burger} alt="" />
                      <img className="menu-close" src={MenuClose} alt="" />
                    </button>
                  </div>
                </nav>
                <div className="navbar-contact">
                  <span className="brand-name">TARTAK LORKI</span>
                  <span className="contact">519 591 509</span>
                </div>
              </div>
            </div>
            <div
              className={
                menuStatus
                  ? "info-container-wrapper"
                  : "info-container-wrapper active"
              }
            >
              <ul
                className={
                  menuStatus ? "info-container" : "info-container active"
                }
              >
                <li className="list-item">
                  <NavLink to="/" exact>
                    Home
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="/o-nas">O nas</NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="/produkty">Produkty</NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="/kontakt">Kontakt</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/o-nas" component={AboutUs} />
                <Route path="/produkty" component={Products} />
                <Route path="/kontakt" component={Contact} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    )
  }
}

export default App
