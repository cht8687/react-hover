import React, { Component } from 'react';
import * as style from './css';

export default class TriggerComponent extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    const refName = "hover1";

    return (
      <h1 
        style={style.trigger} 
        onMouseOver={this.onMouseOver.bind(this, refName)}> 
          hover me 
      </h1>
    );
  }

  onMouseOver() {
    //const refDom = eval(`this.refs.${ref}`);
    console.log('hover');
  }
}
