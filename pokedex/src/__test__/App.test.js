import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from '../App'
    
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      appName: "Pokedex"
    }
    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})