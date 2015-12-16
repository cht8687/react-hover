import React, { Component, PropTypes } from 'react';

export default class HoverComponent extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

  }

  render() {
    const { styles } = this.props;
    return (
      <div
        style={styles.hoverComponent} > 
        <h1> pop up header </h1>
        <p> pop up content </p>
      </div>
    );
  }

  triggered() {
    console.log("I've been triggered");
  }
}
