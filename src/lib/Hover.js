import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hover extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.object,
    styles: PropTypes.object,
    setVisibility: PropTypes.func,
    getCursorPos: PropTypes.func
  };

  render () {
    const { styles } = this.props.children.props
    return (
      <div
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onMouseMove={this.onMouseMove.bind(this)}
        style={styles}
      >
        {this.props.children.props.children}
      </div>
    )
  }

  onMouseOver () {
    const { setVisibility } = this.props.children.props
    setVisibility(true)
  }

  onMouseOut () {
    const { setVisibility } = this.props.children.props
    setVisibility(false)
  }

  onMouseMove (e) {
    const { getCursorPos } = this.props.children.props
    getCursorPos(e)
  }
}
