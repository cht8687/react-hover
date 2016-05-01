import React, { Component, PropTypes } from 'react'

export default class TriggerComponent extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    componentHtml: PropTypes.object.isRequired,
    setVisibility: PropTypes.func.isRequired,
    getCursorPos: PropTypes.func.isRequired
  }

  render () {
    const { styles, componentHtml } = this.props
    return (
      <h1
        style={styles.trigger}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onMouseMove={this.onMouseMove.bind(this)}
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
        dangerouslySetInnerHTML={{ __html: componentHtml.trigger }}
        >
      </h1>
    )
  }

  onMouseOver () {
    const { setVisibility } = this.props
    setVisibility(true)
  }

  onMouseOut () {
    const { setVisibility } = this.props
    setVisibility(false)
  }

  onMouseMove (e) {
    const { getCursorPos } = this.props
    getCursorPos(e)
  }

  onTouchStart () {
    const { setVisibility } = this.props
    setVisibility(true)
  }

  onTouchEnd () {
    const { setVisibility } = this.props
    setVisibility(false)
  }
}
