import React, { Component, PropTypes } from 'react'

export default class Hover extends Component {
  static propTypes = {
     children: PropTypes.object
  }

  render () {
    debugger;
    const { styles } = this.props.children.props;

    return (
      <div style={styles}>
        {this.props.children.props.children}
      </div>
    )
  }
}
