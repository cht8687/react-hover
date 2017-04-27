import React, { Component, PropTypes } from 'react'

export default class Hover extends Component {
  static propTypes = {
     children: PropTypes.object,
     styles: PropTypes.object
  }

  render () {
    const { styles } = this.props.children.props;
    
    return (
      <div style={styles}>
        {this.props.children.props.children}
      </div>
    )
  }
}
