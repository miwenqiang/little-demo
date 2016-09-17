import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
    console.log(this.props.params);
    return(
      <div>
        {
          this.props.params.title=='a' ? '这是第一个' :
          this.props.params.title=='b' ? '这是第二个' :
          this.props.params.title=='c' ? '这是第三个' :
          '您访问的页面没有内容'
        }
      </div>
    )
  }
}

export default Blog;
