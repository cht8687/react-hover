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

    this.state = {
      styles: this.props.styles
    }
  }

  render() {
    const { componentHtml } = this.props;
    const { styles } = this.state;
    return (
      <div>
        <TriggerComponent 
          styles={styles} 
          componentHtml={componentHtml}
          setVisibility={this.setVisibility.bind(this)}
        />
        <HoverComponent 
          styles={styles} 
          componentHtml={componentHtml}
        />
      </div>
    );
  }

  setVisibility(flag) {
    const { styles } = this.state;
    let currentStyles = styles;
    let currentHoverComponent = styles.hoverComponent;
    if(flag) {
      Object.assign(currentHoverComponent, {display: 'block'});
    } else {
      Object.assign(currentHoverComponent, {display: 'none'});
    }
    Object.assign(currentStyles, currentHoverComponent);
    this.setState({
      styles: currentStyles
    })
  }
}
