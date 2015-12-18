import React, { Component, PropTypes } from 'react';
import HoverComponent from './lib/HoverComponent';
import TriggerComponent from './lib/TriggerComponent';

export default class ReactHover extends Component {
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
      <div>
        <TriggerComponent 
          styles={styles} 
          componentHtml={componentHtml}
        />
        <HoverComponent 
          styles={styles} 
          componentHtml={componentHtml}
        />
      </div>
    );
  }
}
