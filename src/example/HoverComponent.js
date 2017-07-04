import React, { Component } from 'react'

export default class HoverComponent extends Component {
  render () {
    return (
      <div style={{height: '200px', overflowY: 'auto', outline: '1px solid blue', width: '300px', background: '#E8E27E', position: 'absolute'}}>
        <h1> pop up header </h1> <p> pop up content </p>
      </div>
    )
  }
}
