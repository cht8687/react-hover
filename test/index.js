import React from 'react'
import test from 'tape'
import ReactHover, { Trigger, Hover } from '../src/ReactHover'
import HoverComponent from '../src/example/HoverComponent'
import TriggerComponent from '../src/example/TriggerComponent'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

test('----- React Component Tests: ReactHover -----', t => {
  t.plan(3)
  t.ok(ReactHover instanceof Function, 'should be function')
  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  }
  const wrapperShallow = shallow(
    <ReactHover options={optionsCursorTrueWithMargin}>
      <Trigger type="trigger">
        <TriggerComponent />
      </Trigger>
      <Hover type="hover">
        <HoverComponent />
      </Hover>{' '}
    </ReactHover>,
  )
  t.equal(1, wrapperShallow.find('TriggerComponent').length)
  t.equal(1, wrapperShallow.find('HoverComponent').length)
  t.end()
})
