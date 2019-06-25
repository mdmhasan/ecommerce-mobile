import React, { Component } from 'react';

export default class Default extends Component {
  
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 pt-5 text-title text-center mx-auto text-uppercase">
            <h1 className="display-3">404</h1>
            <h1>page not found</h1>
            <h5>the requested URL 
              <span className="text-danger mx-2">
                {this.props.location.pathname}
              </span>
               was not found
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
