import React, { Component, PropTypes } from 'react'

export default class Trigger extends Component {
  static propTypes = {
    children: PropTypes.object,
    setVisibility: PropTypes.func,
    getCursorPos: PropTypes.func
  }

  render () {
    return (
      <div
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onMouseMove={this.onMouseMove.bind(this)}
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
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

  onTouchStart () {
    const { setVisibility } = this.props.children.props
    setVisibility(true)
  }

  onTouchEnd () {
    const { setVisibility } = this.props.children.props
    setVisibility(false)
  }
}
