import React, { Component, PropTypes } from 'react'
import Hover from './lib/Hover'
import Trigger from './lib/Trigger'

class ReactHover extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      children: PropTypes.object,
      hoverComponentStyle: {
        display: 'none'
      }
    }
  }

  renderItem (item) {
    if (item.type.name == 'Trigger') {
      return (
        <Trigger>
          {item}
        </Trigger>
      )
    } else if (item.type.name == 'Hover') {
      return (
        <Hover>
          {item}
        </Hover>
      )
    }
  }

  render () {
    const { hoverComponentStyle } = this.state
    let childrenWithProps = [];
    for (let child of this.props.children) {
      if (child.type.name == 'Trigger') {
         childrenWithProps.push(React.cloneElement(child, {
            setVisibility:this.setVisibility.bind(this),
            getCursorPos: this.getCursorPos.bind(this)
          }));
      } else if(child.type.name == 'Hover') {
         childrenWithProps.push(React.cloneElement(child, {
            styles: hoverComponentStyle
         }));
      }
    }

    return (
      <div>
        <div>
          {childrenWithProps.map(item => this.renderItem(item))}
        </div>
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

ReactHover.Trigger = Trigger;
ReactHover.Hover = Hover;

export default ReactHover;
