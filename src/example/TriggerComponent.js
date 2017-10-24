import React, { Component } from 'react'
import styles from './component.css'

export default class TriggerComponent extends Component {
  render () {
    return (
      <div className={styles.trigger}>
        <h1> <p> Hover on me </p> </h1>
      </div>
    )
  }
}
