import React from 'react'
import test from 'tape'
import ReactHover from '../src/ReactHover'
import HoverComponent from '../src/example/hoverComponent'
import TriggerComponent from '../src/example/triggerComponent'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

test('----- React Component Tests: ReactHover -----', t => {
  t.plan(3)
  t.ok(ReactHover instanceof Function, 'should be function')
  const optionsCursorFalse = {
   followCursor: false
  }
  const wrapperShallow = shallow( <ReactHover  options={optionsCursorFalse}>
              <ReactHover.Trigger>
                <TriggerComponent />
              </ReactHover.Trigger>
              <ReactHover.Hover>
                <HoverComponent />
              </ReactHover.Hover> </ReactHover>)
  t.equal(1, wrapperShallow.find('TriggerComponent').length)
  t.equal(1, wrapperShallow.find('HoverComponent').length)
  t.end()
})
