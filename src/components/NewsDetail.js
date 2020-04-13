import React, { Component } from 'react';
import data from './data';
import NewRelated from './NewRelated';

class NewsDetail extends Component {
    render() {
      var dem = 1;
      
      return (
          <div>
              <div>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5" style={{textAlign: 'center'}}>Trang chi tiết tin</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
  {
    data.map((value,key)=> {
          
            if (value.id == this.props.match.params.id) {
              return (
                <div className="jumbotron jumbotron-fluid" key={key}>
                  <div className="container">
                    <img src={value.anh} className="img-fluid size100" alt="" />
                    <p className="lead">{value.tieuDe}</p>
                    <hr className="my-2" />
                    <p>{value.noiDung}</p>
                  </div>
                </div>
              )
            }
        })
  }
  <div className="container">
    <h4 className="card-title text-center">Tin liên quan</h4>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
        {
          data.map((value,key)=>{
            if (value.id != this.props.match.params.id)
            if (dem <= 4){
              dem++;
              return (
                <NewRelated 
                key={key}
                tinId={value.id} 
                anh={value.anh} 
                tieuDe={value.tieuDe}
                trichDan={value.trichDan} >
                >
                </NewRelated>
              )
            }
          })
        }
          
        </div>
      </div>
    </div>
  </div>            
  {/* end tintuc */}
</div>

            </div>
        );
    }
}

export default NewsDetail;