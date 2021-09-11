import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  type: PropTypes.string,
  children: PropTypes.object,
  styles: PropTypes.object,
  setVisibility: PropTypes.func,
  getCursorPos: PropTypes.func,
}

function Hover(props){
  const { setVisibility, getCursorPos, styles } = props.children.props;

  return(
    <div
      onMouseOver={() => setVisibility(true)}
      onMouseOut={() => setVisibility(false)}
      onMouseMove={(e) => getCursorPos(e)}
      style={styles}
    >
      {props.children.props.children}
    </div>
  )
}

Hover.propTypes = propTypes;

export default Hover;