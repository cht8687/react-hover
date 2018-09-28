import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactHover from '..'
import HoverComponent from './HoverComponent'
import TriggerComponent from './TriggerComponent'
import './styles.css'
import './component.css'

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'title'}> React-hover
          <div className={'description'}>
            <a href='https://github.com/cht8687/react-hover'>Github</a>
          </div>
        </div>
        <div className={'main'}>
          <h2 className={'subtitle'}> Use custom components as trigger and hover </h2>
          <div className={'subcontainer'}>
            <div className={'subleft'}>
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
            </div>
            <div className={'subright'}>
              <ReactHover
                options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type='trigger'>
                  <TriggerComponent />
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                  <HoverComponent />
                </ReactHover.Hover>
              </ReactHover>
            </div>
          </div>
          <h2 className={'subtitle'}> Use HTML as trigger and hover </h2>
          <div className={'subcontainer'}>
            <div className={'subleft'}>
              <pre>{`
              <ReactHover
              options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger type='trigger'>
                <h1 style={{ background: '#44B39D', width: '200px', fontSize: '1.5em', color: 'white' }}> <p>Hover on me</p></h1>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover'>
                <div className={componentstyles.hover}>
                  <img className={componentstyles.thumbnail} alt="Albert Einstein" src="https://images.gr-assets.com/authors/1429114964p2/9810.jpg" />
                  <blockquote className={componentstyles.quote}> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. </blockquote>
                  <p className={componentstyles.people}>--Albert Einstein</p>
                </div>
              </ReactHover.Hover>
            </ReactHover>`}
              </pre>
            </div>
            <div className={'subright'}>
              <ReactHover
                options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type='trigger'>
                  <h1 style={{ background: '#44B39D', width: '200px', fontSize: '1.5em', color: 'white' }}> <p>Hover on me</p></h1>
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                  <div className={'hover'}>
                    <img className={'thumbnail'} alt='Albert Einstein' src='https://images.gr-assets.com/authors/1429114964p2/9810.jpg' />
                    <blockquote className={'quote'}> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. </blockquote>
                    <p className={'people'}>--Albert Einstein</p>
                  </div>
                </ReactHover.Hover>
              </ReactHover>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App />, appRoot)
