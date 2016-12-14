import React, { Component, PropTypes } from 'react'

export default class Hover extends Component {
  static propTypes = {
    children: PropTypes.object,
    styles: PropTypes.object.isRequired
  }

  render () {
    const { styles } = this.props

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}
