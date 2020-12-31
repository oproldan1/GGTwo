import React from "react";
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import the login component and then shallow wrap it
import Login from '../client/components/login/Login.jsx'

configure({ adapter: new Adapter() });

// shallow wrap Login component
const wrapper = shallow(<Login />)

describe('<Login />', () => {
  /*
    Added Jest 
    Installed latest version adapter
    Needed a .babelrc with presets "@babel/preset-env", "@babel/preset-react"
    Downgraded React to reflect enzyme adapter
    Kept server running during tests
    STUDY DOC METHODS for test syntax
  */


  it("Renders an h1", () => {
    // expect(wrapper.exists(<input onClick={this.submitChange} type="submit"value="Login"/>).to.equal(true))
    expect(wrapper.find("h1"))
    expect(wrapper.find("form"))
  })
});