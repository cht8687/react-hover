import React, { Component } from 'react'
import { render } from 'react-dom'
import { CopyBlock, nord } from 'react-code-blocks'
import { customComponentSnippet, plainCodeSnippet } from './codeblocks'
import ReactHover, { Trigger, Hover } from '..'
import HoverComponent from './HoverComponent'
import TriggerComponent from './TriggerComponent'
import './styles.css'
import './component.css'

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
}

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'title'}>
          {' '}
          React-hover
          <div className={'description'}>
            <a href="https://github.com/cht8687/react-hover">Github</a>
          </div>
        </div>
        <div className={'main'}>
          <h2 className={'subtitle'}>
            {' '}
            Use custom components as trigger and hover{' '}
          </h2>
          <div className={'subcontainer'}>
            <div className={'subleft'}>
              <CopyBlock
                language="jsx"
                text={customComponentSnippet}
                startingLineNumber={1}
                showLineNumbers={10}
                theme={nord}
                wrapLines={true}
              />
            </div>
            <div className={'subright'}>
              <ReactHover options={optionsCursorTrueWithMargin}>
                <Trigger type="trigger">
                  <TriggerComponent />
                </Trigger>
                <Hover type="hover">
                  <HoverComponent />
                </Hover>
              </ReactHover>
            </div>
          </div>
          <h2 className={'subtitle'}> Use HTML as trigger and hover </h2>
          <div className={'subcontainer'}>
            <div className={'subleft'}>
              <CopyBlock
                language="jsx"
                text={plainCodeSnippet}
                showLineNumbers={10}
                startingLineNumber={1}
                theme={nord}
                wrapLines={true}
              />
            </div>
            <div className={'subright'}>
              <ReactHover options={optionsCursorTrueWithMargin}>
                <Trigger type="trigger">
                  <h1
                    style={{
                      background: '#44B39D',
                      width: '200px',
                      color: 'white',
                    }}
                  >
                    {' '}
                    <p>Hover on me</p>
                  </h1>
                </Trigger>
                <Hover type="hover">
                  <div className={'hover'}>
                    <img
                      className={'thumbnail'}
                      alt="Albert Einstein"
                      src="https://images.gr-assets.com/authors/1429114964p2/9810.jpg"
                    />
                    <blockquote className={'quote'}>
                      {' '}
                      Two things are infinite: the universe and human stupidity;
                      and I'm not sure about the universe.{' '}
                    </blockquote>
                    <p className={'people'}>--Albert Einstein</p>
                  </div>
                </Hover>
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
