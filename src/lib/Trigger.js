import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Trigger extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.object,
    setVisibility: PropTypes.func,
    getCursorPos: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      styles: {}
    }
  }

  componentDidMount () {
    let childStyles = this.refs.triggerContainer.children[0].style
    this.setState({
      styles: {
        width: childStyles.width,
        height: childStyles.height,
        margin: childStyles.margin
      }
    })
  }

  render () {
    const { styles } = this.state
    return (
      <div
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onMouseMove={this.onMouseMove.bind(this)}
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
        ref='triggerContainer'
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

  onTouchStart () {
    const { setVisibility } = this.props.children.props
    setVisibility(true)
  }

  onTouchEnd () {
    const { setVisibility } = this.props.children.props
    setVisibility(false)
  }
}
