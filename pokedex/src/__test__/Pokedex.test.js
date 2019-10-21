import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Pokedex from '../components/Pokedex';
    
Enzyme.configure({ adapter: new Adapter() });

describe('Pokedex', () => {
    it('renders without crashing given the required props', () => {
      const props = {
        appName: "Pokedex"
      }
      const wrapper = shallow(<Pokedex {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
