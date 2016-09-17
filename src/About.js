import React from 'react';
import axios from 'axios';

class About extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/miwenqiang')
    .then(
      (res)=>this.setState({
        data:res.data,
        wait:false
      })
    )
  }
  render(){
    let myName = <div>
                   <p>{this.state.data.name}</p>
                   <img src={this.state.data.avatar_url} />
                 </div>
    return(
      <div>
        {
          this.state.wait ? '正在加载...' : myName
        }
      </div>
    )
  }
}
export default About;
