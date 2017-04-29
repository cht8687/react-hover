import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactHover from '..'
// import * as styles from './css'
import HoverComponent from './HoverComponent'
import TriggerComponent from './TriggerComponent'

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}

class App extends Component {

  render () {
    return (
      <div>
        <h3 style={{margin: '0 auto', textAlign: 'center'}}> Basic </h3>
        <ReactHover
          className='basic'
          options={optionsCursorTrueWithMargin}>
          <ReactHover.Trigger>
            <TriggerComponent />
          </ReactHover.Trigger>
          <ReactHover.Hover>
            <HoverComponent />
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
