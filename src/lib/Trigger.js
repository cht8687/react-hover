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

  return(
    <div
      onMouseOver={() => setVisibility(true)}
      onMouseOut={() => setVisibility(false)}
      onMouseMove={(e) => getCursorPos(e)}
      onTouchStart={() => setVisibility(true)}
      onTouchEnd={() => setVisibility(false)}
      ref={triggerContainerRef}
      style={styles}
    >
      {props.children.props.children}
    </div>
  )
}

Trigger.propTypes = propTypes;

export default Trigger;