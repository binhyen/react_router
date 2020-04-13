import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../components/Home';
import News from '../components/News';
import Contact from '../components/Contact';
import NewsDetail from '../components/NewsDetail';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                {/* <Switch> */}
                <Route path="/home" component={Home}></Route>
                <Route path="/tin" component={News}></Route>
                <Route path="/tin-chi-tiet/:slug.:id.html" component={NewsDetail}></Route>
                <Route path="/lien-he" component={Contact}></Route>
                {/* </Switch> */}
            </div>
        );
    }
}

export default DieuHuongURL;