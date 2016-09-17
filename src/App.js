import React from 'react';

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
class App extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
export default App;
