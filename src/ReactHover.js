import React, { Component } from 'react';

export default class ReactHover extends Component {
  static propTypes = {
  	children: React.PropTypes.node
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
