import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './../css/Nav.css';
class Nav extends Component {
    render() {
        return (
            <div>
                {/* begin menu   */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                  <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/home">React router - News</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                      <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ml-auto">
                        <li>
                          <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/tin">Tin tức</NavLink>
                        </li>
                        <li>
                          <NavLink to="/tin-chi-tiet">Tin chi tiết</NavLink>
                        </li>
                        <li>
                          <NavLink to="/lien-he">Liên hệ</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/* end menu */}
            </div>
        );
    }
}

export default Nav;