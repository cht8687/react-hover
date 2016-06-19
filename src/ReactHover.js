import React, { Component, PropTypes } from 'react'
import HoverComponent from './lib/HoverComponent'
import TriggerComponent from './lib/TriggerComponent'

export default class ReactHover extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    componentHtml: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      triggerComponentStyle: this.props.styles.trigger,
      hoverComponentStyle: this.props.styles.hoverComponent
    }
  }

  render () {
    const { componentHtml } = this.props
    const { triggerComponentStyle, hoverComponentStyle } = this.state
    return (
      <div>
        <TriggerComponent
          styles={triggerComponentStyle}
          componentHtml={componentHtml}
          setVisibility={this.setVisibility.bind(this)}
          getCursorPos={this.getCursorPos.bind(this)}
        />
        <HoverComponent
          styles={hoverComponentStyle}
          componentHtml={componentHtml}
        />
      </div>
    )
  }

  setVisibility (flag) {
    let { hoverComponentStyle } = this.state
    let updatedStyles = null
    if (flag) {
      updatedStyles = Object.assign({}, hoverComponentStyle, {display: 'block'})
    } else {
      updatedStyles = Object.assign({}, hoverComponentStyle, {display: 'none'})
    }
    this.setState({
      hoverComponentStyle: updatedStyles
    })
  }

  getCursorPos (e) {
    const cursorX = e.pageX
    const cursorY = e.pageY
    let {options: { followCursor, shiftX, shiftY }} = this.props
    const { hoverComponentStyle } = this.state
    let updatedStyles = null
    if (!followCursor) {
      return
    }
    if (shiftX == NaN) {
      shiftX = 0
    }
    if (shiftY == NaN) {
      shiftY = 0
    }
    updatedStyles = Object.assign({}, hoverComponentStyle, {top: cursorY + shiftY, left: cursorX + shiftX})
    this.setState({
      hoverComponentStyle: updatedStyles
    })
  }
}
