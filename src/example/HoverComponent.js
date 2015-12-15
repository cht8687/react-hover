import React, { Component } from 'react';
import * as style from './css';

export default class HoverComponent extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div
        style={style.hoverComponent} > 
        <h1> pop up header </h1>
        <p> pop up content </p>
      </div>
    );
  }
}
