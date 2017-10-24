import React, { Component } from 'react'
import styles from './component.css'

export default class HoverComponent extends Component {
  render () {
    return (
      <div className={styles.hover}>
        <img className={styles.thumbnail} alt='Albert Einstein' src='https://images.gr-assets.com/authors/1429114964p2/9810.jpg' />
        <blockquote className={styles.quote}> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. </blockquote>
        <p className={styles.people}>--Albert Einstein</p>
      </div>
    )
  }
}
