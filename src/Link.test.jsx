import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Link from './Link'

/* globals test window jest expect */


test('renders without crashing', () => {
  const div = window.document.createElement('div')
  ReactDOM.render(<Link href="http://www.cape.io/">foo</Link>, div)
})
test('calls onClick', () => {
  const clickHandler = jest.fn()
  const anchor = shallow(<Link href="http://www.cape.io/" onClick={clickHandler}>Link Text</Link>)
  anchor.find('a').simulate('click')
  expect(clickHandler.mock.calls.length).toBe(1)
  const el2 = <Link href="http://www.cape.io/" onClick={clickHandler} top>Link Text</Link>
  const anchor2 = shallow(el2)

  anchor2.find('a').simulate('click')
  expect(clickHandler.mock.calls.length).toBe(2)
})
