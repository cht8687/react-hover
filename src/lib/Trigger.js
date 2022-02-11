import React, { useState, useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

const propTypes = {
  type: PropTypes.string,
  children: PropTypes.object,
  setVisibility: PropTypes.func,
  getCursorPos: PropTypes.func,
}

function Trigger(props){
  const [styles, setStyles] = useState({});
  const { setVisibility, getCursorPos } = props.children.props;
  const triggerContainerRef = useRef(null)

  useEffect(() => {
    let childStyles = window.getComputedStyle(
      ReactDom.findDOMNode(triggerContainerRef.current.children[0]),
    )
    setStyles({
      width: childStyles.getPropertyValue('width'),
      height: childStyles.getPropertyValue('height'),
      margin: childStyles.getPropertyValue('margin')
    })
  }, [])

  const onMouseOver = () => {
    setVisibility(true)
    props.onMouseOver && props.onMouseOver()
  }

  const onMouseOut = () => {
    setVisibility(false)
    props.onMouseOut && props.onMouseOut()
  }

  const onMouseMove = e => {
    getCursorPos(e)
    props.onMouseMove && props.onMouseMove(e)
  }

  const onTouchStart = () => {
    setVisibility(true)
    props.onTouchStart && props.onTouchStart()
  }

  const onTouchEnd = () => {
    setVisibility(false)
    props.onTouchStart && props.onTouchStart()
  }

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      ref={triggerContainerRef}
      style={styles}
    >
      {props.children.props.children}
    </div>
  )
}

Trigger.propTypes = propTypes;

export default Trigger;
