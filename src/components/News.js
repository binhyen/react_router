import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import data from './data';
import NewsItem from './NewsItem';


class News extends Component {
  
    render() {
        return (
            <div>
                <div>
              <header className="masthead tintuc">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="col-lg-7 my-auto">
                      <div className="header-content mx-auto">
                        <h1 className="mb-5" style={{textAlign: 'center'}}>Trang danh sách tin</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              {/* begin tintuc */}
              <div className="container mt-3">
                <div className="row">
                {
                  data.map((value,key) => {
                  return (
                    <NewsItem 
                    key={key}
                    tinId={value.id} 
                    anh={value.anh} 
                    tieuDe={value.tieuDe}
                    trichDan={value.trichDan} >
                    </NewsItem>
                  )
                })
                }
                </div>
              </div>
              {/* end tintuc */}
            </div>
            </div>
        );
    }
}

export default News;