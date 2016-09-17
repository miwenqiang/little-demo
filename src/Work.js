import React from 'react';

import Card from './components/Card.js';
import Bg1 from './images/1.jpg';
import Bg2 from './images/2.jpg';
import Bg3 from './images/3.jpg';




let Data=[
  {title:'这是第一天',derc:'这是第一个',src:Bg1,url:'a'},
  {title:'这是第二天',derc:'这是第二个',src:Bg2,url:'b'},
  {title:'这是第三天',derc:'这是第三个',src:Bg3,url:'c'}
]
class Work extends React.Component{

  render(){
    let styles={
      div:{
        backgroundColor:'teal'
      }
    }
    return(
      <div className="container-fluid">
        <div className="row">
          {Data.map( (item,i) => <Card {...item} key={i} /> )}
        </div>
      </div>
    )
  }
}
export default Work;
