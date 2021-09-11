import React, { useState } from 'react'
import Hover from './lib/Hover'
import Trigger from './lib/Trigger'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  className: PropTypes.string,
}

function renderItem(item, index) {
  if (item.type.name === 'Trigger' || item.props.type === 'trigger') {
    return <Trigger key={index}>{item}</Trigger>
  } else if (item.type.name === 'Hover' || item.props.type === 'hover') {
    return <Hover key={index}>{item}</Hover>
  }
}

function ReactHover(props) {
  let [hoverComponentStyle, updateHoverComponentStyle] = useState({
    display: 'none',
    position: 'absolute',
  })

  const setVisibility = flag => {
    let updatedStyles = null
    if (flag) {
      updatedStyles = { ...hoverComponentStyle, display: 'block' }
    } else {
      updatedStyles = { ...hoverComponentStyle, display: 'none' }
    }
    updateHoverComponentStyle(updatedStyles)
  }

  const getCursorPos = e => {
    const cursorX = e.pageX
    const cursorY = e.pageY
    let {
      options: { followCursor, shiftX, shiftY },
    } = props
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
    updatedStyles = {
      ...hoverComponentStyle,
      top: cursorY + shiftY,
      left: cursorX + shiftX,
    }
    updateHoverComponentStyle(updatedStyles)
  }

  let childrenWithProps = []
  for (let child of props.children) {
    if (child.props) {
      if (child.type.name === 'Trigger' || child.props.type === 'trigger') {
        childrenWithProps.push(
          React.cloneElement(child, {
            setVisibility: setVisibility,
            getCursorPos: getCursorPos,
          }),
        )
      } else if (child.type.name === 'Hover' || child.props.type === 'hover') {
        childrenWithProps.push(
          React.cloneElement(child, {
            styles: hoverComponentStyle,
            setVisibility: setVisibility,
            getCursorPos: getCursorPos,
          }),
        )
      }
    }
  }

  return (
    <div>{childrenWithProps.map((item, index) => renderItem(item, index))}</div>
  )
}

ReactHover.propTypes = propTypes

export { Trigger, Hover }
export default ReactHover
