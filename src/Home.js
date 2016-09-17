import React from 'react';
import { hashHistory } from 'react-router';

class Home extends React.Component{
  handleClick(){
    hashHistory.push('/work')
  }
  render(){
    return(
      <div className="hero-unit">
        <div className="row">
          <h1 className="col-xs-6 col-xs-offset-3">欢迎光临我的主页！</h1>
          <p className="col-xs-8 col-xs-offset-2">This is my place!</p>
        </div>
        <p>
          <a className="btn btn-primary btn-large" role="button" onClick={this.handleClick.bind(this)}>
            My Work
          </a>
        </p>
      </div>
    )
  }
}
export default Home;
