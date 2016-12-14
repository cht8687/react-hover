import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactHover from '..'
import * as styles from './css'
import { hoverComponent } from './hoverComponent';
import { triggerComponent } from './triggerComponent';

const optionsCursorFalse = {
    followCursor: false
}

class App extends Component {

  render () {
    return (
      <div>
        <h3 style={{margin: '0 auto', textAlign: 'center'}}> Basic </h3>
        <ReactHover
          className='basic'
          styles={styles.basic}
          options={optionsCursorFalse}>
          <ReactHover.Trigger>
            <hoverComponent></hoverComponent>
          </ReactHover.Trigger>
          <ReactHover.Hover>
            <triggerComponent></triggerComponent>
          </ReactHover.Hover>
        </ReactHover>
      </div>
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App />, appRoot)
