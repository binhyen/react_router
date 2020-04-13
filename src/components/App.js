import React, {Component} from 'react';
import './../css/App.css';
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trangthai: "khoitao",
      trangthai2: "khoitao2"
    }
  }


  render() {
    return (
      <Router>
      <div>
        <Nav></Nav>
        {/* <Home></Home> */}
        {/* <News></News> */}
        {/* <NewsDetail></NewsDetail> */}
        {/* <Contact></Contact> */}
        <DieuHuongURL></DieuHuongURL>
        <Footer></Footer>
      </div>
      </Router>
    )
  }
}

export default App;
