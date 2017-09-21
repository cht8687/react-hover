import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactHover from '..'
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
        <h3> There are two ways that you can use this library in Version 2</h3>
        <p style={{ margin: '0 auto' }}> 1. Use custom components as trigger and hover </p>
        <pre style={{ margin: '0 auto' }}>{`
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

        <p style={{ margin: '0 auto' }}> 2. Use HTML as trigger and hover </p>
        <pre style={{ margin: '0 auto' }}>{`
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
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App />, appRoot)
