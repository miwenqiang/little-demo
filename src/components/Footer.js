import React from 'react';

class Footer extends React.Component{
  render(){
    let styles={
      root:{
        backgroundColor:'#757575',
        position:'fixed',
        bottom:'0',
        left:'0'
      }

    }
    return(
      <div className="col-xs-12" style={styles.root}>
        <h1 className="col-xs-6 col-xs-offset-3">nice to meet you</h1>
      </div>
    )
  }
}
export default Footer;
