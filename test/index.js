import React from 'react'
import test from 'tape'
import ReactHover from '../src/ReactHover'
import TriggerComponent from '../src/lib/TriggerComponent'
import HoverComponent from '../src/lib/HoverComponent'
import * as styles from '../src/example/css'
import * as componentHtml from '../src/example/componentHtml'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

test('----- React Component Tests: ReactHover -----', t => {
  t.plan(3)
  t.ok(ReactHover instanceof Function, 'should be function')
  const optionsCursorFalse = {
   followCursor: false
  }
  const wrapperShallow = shallow( <ReactHover styles={styles.basic} componentHtml={componentHtml.basicComponentHtml} options={optionsCursorFalse} />)
  t.equal(1, wrapperShallow.find('TriggerComponent').length)
  t.equal(1, wrapperShallow.find('HoverComponent').length)
  t.end()
})

test('----- React Component Tests: TriggerComponent -----', t => {
  t.plan(2)
  t.ok(TriggerComponent instanceof Function, 'should be function')
  const styles = {
    trigger: {
      background: '#E0037E',
      width: '200px',
      margin: '0 auto'
    },
    hoverComponent: {
      height: '200px',
      overflowY: 'auto',
      outline: '1px solid blue',
      width: '300px',
      background: '#E8E27E',
      display: 'none',
      position: 'absolute',
      margin: '-20px 0 0 717px'
    }
  }

  const componentHtml = {
    hoverComponent: '<h1> pop up header </h1> <p> pop up content </p>',
    trigger: 'hover me'
  }

  function func() {};
  const wrapper = shallow(<TriggerComponent styles={styles} componentHtml={componentHtml}  setVisibility={func} getCursorPos={func}/>)
  t.equal(true, wrapper.containsMatchingElement(<div></div>))

  t.end()
})

test('----- React Component Tests: HoverComponent -----', t => {
  t.plan(2)
  t.ok(HoverComponent instanceof Function, 'should be function')
  const styles = {
    trigger: {
      background: '#E0037E',
      width: '200px',
      margin: '0 auto'
    },
    hoverComponent: {
      height: '200px',
      overflowY: 'auto',
      outline: '1px solid blue',
      width: '300px',
      background: '#E8E27E',
      display: 'none',
      position: 'absolute',
      margin: '-20px 0 0 717px'
    }
  }

  const componentHtml = {
    hoverComponent: '<h1> pop up header </h1> <p> pop up content </p>',
    trigger: 'hover me'
  }

  const wrapper = shallow(<HoverComponent styles={styles} componentHtml={componentHtml} />)
  t.equal(true, wrapper.containsMatchingElement(<div></div>))
  t.end()
})

