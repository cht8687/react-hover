import React from 'react'
import test from 'tape'
import ReactHover from '../src/ReactHover'
import TriggerComponent from '../src/lib/TriggerComponent'
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

// to do: fix below mouse events
// test('----- React Component Tests: mouse events -----', t => {
//   t.plan(2)
//   t.ok(TriggerComponent instanceof Function, 'should be function')
//   const onMouseOver = sinon.spy()
//   const optionsCursorFalse = {
//    followCursor: false
//   }
//   const wrapperShallow = shallow( <TriggerComponent />)
//   const triggerComponent = wrapperShallow.find('h1')
//   triggerComponent.simulate('onMouseOver')
//   const actual = onMouseOver.calledOnce
//   const expected = true
//   t.equal(actual, expected, 'trigger mouseover once')
//   t.end()
// })
