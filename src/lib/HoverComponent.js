import React, { Component, PropTypes } from 'react';

export default class HoverComponent extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    componentHtml: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

  }

  render() {
    const { styles, componentHtml } = this.props;

    return (
      <div
        style={styles.hoverComponent} 
        dangerouslySetInnerHTML={{ __html: componentHtml.trigger }}
        > 
      </div>
    );
  }

  triggered() {
    console.log("I've been triggered");
  }
}
