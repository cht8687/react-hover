import React, { Component, PropTypes } from 'react'
import Hover from './lib/Hover'
import Trigger from './lib/Trigger'
import classnames from 'classnames'

class ReactHover extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      children: PropTypes.object,
      triggerComponentStyle: this.props.styles.trigger,
      hoverComponentStyle: this.props.styles.hoverComponent
    }
  }

  render () {
    const { className } = this.props
    const { triggerComponentStyle, hoverComponentStyle } = this.state
    debugger;
    let childrenWithProps = [];
    for (let child of this.props.children) {
      if (child.type.name == 'Trigger') {
         childrenWithProps.push(React.cloneElement(child, {
            styles: triggerComponentStyle,
            setVisibility:this.setVisibility.bind(this),
            getCursorPos: this.getCursorPos.bind(this)
          }));
      } else if(child.type.name == 'Hover') {
         childrenWithProps.push(React.cloneElement(child, {
            styles: hoverComponentStyle
         }));
      }
    }
    debugger;
    return (
      <div className={classnames(className)}
           setVisibility={this.setVisibility.bind(this)}
           getCursorPos={this.getCursorPos.bind(this)}
      >
        {childrenWithProps}
      </div>
    )
  }

  setVisibility (flag) {
    debugger;
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


ReactHover.Trigger = Trigger;
ReactHover.Hover = Hover;

export default ReactHover;
