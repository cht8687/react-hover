import React, { Component, PropTypes } from 'react';
import HoverComponent from './lib/HoverComponent';
import TriggerComponent from './lib/TriggerComponent';

export default class ReactHover extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

  }

  render() {
    const { styles } = this.props;
    return (
      <div>
        <TriggerComponent styles={styles}/>
        <HoverComponent styles={styles}/>
      </div>
    );
  }
}
