import React, { PropTypes } from 'react';
import { browserHistory , hashHistory } from 'react-router';

class Card extends React.Component {
  clickJump(){
    let address=this.props.url
    hashHistory.push(`/blog/${address}`)
  }
  render () {
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.src} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.derc}</p>
            <p><a className="btn btn-primary" role="button" onClick={this.clickJump.bind(this)}>Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  title:'这是第一天',
  derc:'这是第一个',
  src:'./src/images/1.jpg'
}

export default Card;
