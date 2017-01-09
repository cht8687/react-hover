import React, { Component, PropTypes } from 'react'
import HoverComponent from './lib/HoverComponent'
import TriggerComponent from './lib/TriggerComponent'
import classnames from 'classnames'

export default class ReactHover extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    componentHtml: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      triggerComponentStyle: props.styles.trigger,
      hoverComponentStyle: props.styles.hoverComponent
    }
  }

  render () {
    const { componentHtml, className } = this.props
    const { triggerComponentStyle, hoverComponentStyle } = this.state
    return (
      <div className={classnames(className)} >
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
      updatedStyles = {...hoverComponentStyle, display: 'block'}
    } else {
      updatedStyles = {...hoverComponentStyle, display: 'none'}
    }
    this.setState({
      hoverComponentStyle: updatedStyles
    })
  }

  getCursorPos (e) {
    const cursorX = e.pageX
    const cursorY = e.pageY
    let {options: { followCursor, shiftX, shiftY }} = this.props
    let { hoverComponentStyle } = this.state
    let updatedStyles = null
    if (!followCursor) {
      return
    }
    if (isNaN(shiftX)) {
      shiftX = 0
    }
    if (isNaN(shiftY)) {
      shiftY = 0
    }
    updatedStyles = {...hoverComponentStyle, top: cursorY + shiftY, left: cursorX + shiftX}
    this.setState({
      hoverComponentStyle: updatedStyles
    })
  }
}
