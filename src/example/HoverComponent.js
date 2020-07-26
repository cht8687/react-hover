import React, { Component } from 'react'
import './component.css'

export default class HoverComponent extends Component {
  render() {
    return (
      <div className={'hover'}>
        <img
          className={'thumbnail'}
          alt="Albert Einstein"
          src="https://images.gr-assets.com/authors/1429114964p2/9810.jpg"
        />
        <blockquote className={'quote'}>
          {' '}
          Two things are infinite: the universe and human stupidity; and I'm not
          sure about the universe.{' '}
        </blockquote>
        <p className={'people'}>--Albert Einstein</p>
      </div>
    )
  }
}
