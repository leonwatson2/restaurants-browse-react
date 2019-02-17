import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";

import App from './App';
import { LocationDetails } from './components/LocationDetails';
import { ListView } from './components/ListView';
import { GoogleMap } from './components/GoogleMap';

describe('App existence', ()=>{
  let tree
  beforeEach(() => {
    tree = renderApp({ });
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('List View should exist', ()=>{
    expect( tree.ListView() ).toExist()
  })
  
  it('Location Details should exist', () => {
    expect( tree.LocationDetails() ).toExist()
  })

})

describe('Location Details', ()=>{
  let locationTree;
  beforeEach(()=>{
    locationTree = renderLocationDetails()
  })
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocationDetails />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('should have a google map component inside', () => {
    expect(locationTree.googleMap()).toExist()
  })
})

function renderLocationDetails(){
  let tree = mount(
    <LocationDetails />,
  )
  tree.googleMap = () => {
     const el = tree.find(GoogleMap)
     return el
  }
  return tree
}
function renderApp(){
  const tree = mount(
    <App />,
  );

  tree.ListView = ()=>{
    const el = tree.find(ListView)
    el.switch = () => el.find('.switch')
    return el
  }

  tree.LocationDetails = () => {
    const el = tree.find(LocationDetails)
    el.lightBulb = () => el.find('#light-buld')
    return el
  }

  return tree
}