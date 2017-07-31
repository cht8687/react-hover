import React from 'react'
import test from 'tape'
import ReactHover from '../src/ReactHover'
import HoverComponent from '../src/example/HoverComponent'
import TriggerComponent from '../src/example/TriggerComponent'
import { shallow } from 'enzyme'

test('----- React Component Tests: ReactHover -----', t => {
  t.plan(3)
  t.ok(ReactHover instanceof Function, 'should be function')
  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0
  }
  const wrapperShallow = shallow( <ReactHover  options={optionsCursorTrueWithMargin}>
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
