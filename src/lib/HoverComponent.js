import React, { Component, PropTypes } from 'react'

export default class HoverComponent extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    componentHtml: PropTypes.object.isRequired
  }

  render () {
    const { styles, componentHtml } = this.props

    return (
      <div
        style={styles.hoverComponent}
        dangerouslySetInnerHTML={{ __html: componentHtml.hoverComponent }}
        >
      </div>
    )
  }
}
