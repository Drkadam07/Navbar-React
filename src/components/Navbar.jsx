import React, { Component } from 'react';
import { MenuData } from './MenuData';
import "./navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
    activeLink: '' // Add activeLink state
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  setActiveLink = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light NavbarItems">
        <h1> <i className="fa-regular fa-user"></i> </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa-solid fa-x' : "fa-solid fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "navbar-nav active" : 'navbar-nav'}>
          {MenuData.map((item, index) => (
            <li className="nav-item" key={index}>
              <a
                className={`${item.cName} ${this.state.activeLink === item.title ? 'active' : ''}`}
                href={item.url}
                onClick={() => this.setActiveLink(item.title)} // Set active link on click
              >
                {item.icon && <i className={item.icon}></i>} {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
