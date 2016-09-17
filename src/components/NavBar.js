import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component{
  render(){
    let styles = {
      xiaomi:{
        backgroundColor:'#9C27B0',
        color:'#fff',
        fontweight:'700'
      }
    }
    return(
      <div>
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="row">
              <div className="navbar-header col-xs-2">
                <a className="navbar-brand" > XiaoMi  </a>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <Link activeStyle={{backgroundColor:'teal',color:'#fff'}} onlyActiveOnIndex={true} to='/'>Home</Link>
                </li>
                <li>
                  <Link activeStyle={{backgroundColor:'teal',color:'#fff'}}to='/work'>Work</Link>
                </li>
                <li>
                  <Link activeStyle={{backgroundColor:'teal',color:'#fff'}}to='/about'>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}
export default NavBar;
