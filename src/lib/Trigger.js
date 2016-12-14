import React, { Component, PropTypes } from 'react'

export default class Trigger extends Component {
  static propTypes = {
    children: PropTypes.object,
    styles: PropTypes.object.isRequired,
    setVisibility: PropTypes.func.isRequired,
    getCursorPos: PropTypes.func.isRequired
  }

  render () {
    const { styles } = this.props
    return (
      <div
        style={styles}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onMouseMove={this.onMouseMove.bind(this)}
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
        >
        {this.props.children}
      </div>
    )
  }

  onMouseOver () {
    const { setVisibility } = this.props
    setVisibility(true)
  }

  onMouseOut () {
    const { setVisibility } = this.props
    setVisibility(false)
  }

  onMouseMove (e) {
    const { getCursorPos } = this.props
    getCursorPos(e)
  }

  onTouchStart () {
    const { setVisibility } = this.props
    setVisibility(true)
  }

  onTouchEnd () {
    const { setVisibility } = this.props
    setVisibility(false)
  }
}
