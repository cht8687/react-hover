import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactHover from '..'
import HoverComponent from './HoverComponent'
import TriggerComponent from './TriggerComponent'
import styles from './styles.css';

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}

class App extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.title}> React-hover
          <div className={styles.description}></div>
        </div>
        <div className={styles.main}>
          <h2 className={styles.subtitle}> Use custom components as trigger and hover </h2>
          <pre>{`
            <ReactHover
              options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger type='trigger'>
                <TriggerComponent />
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover>
                <HoverComponent />
              </ReactHover.Hover>
              </ReactHover>`}
          </pre>
          <ReactHover
            options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <TriggerComponent />
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              <HoverComponent />
            </ReactHover.Hover>
          </ReactHover>

          <h2 className={styles.subtitle}> Use HTML as trigger and hover </h2>
          <pre>{`
            <ReactHover
              options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger type='trigger'>
                <h1 style={{background: '#abbcf1', width: '200px'}}> Hover on me </h1>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover'>
                <h1> I am hover HTML </h1>
              </ReactHover.Hover>
            </ReactHover>`}
          </pre>
          <ReactHover
            options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <h1 style={{ background: '#abbcf1', width: '200px' }}> Hover on me </h1>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              <h1> I am hover HTML </h1>
            </ReactHover.Hover>
          </ReactHover>
        </div>
      </div>
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App />, appRoot)
