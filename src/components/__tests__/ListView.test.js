import React from 'react'
import { mount } from "enzyme";
import ListView from "../ListView";
import LocationItem from '../LocationItem';

describe('list view', () => {
    let tree 
    it('should render the correct number of locations', ()=>{
        const mockLocations = [{name: 'Name1'}, {name: 'Name2'}, {name: 'Name3'}, {name: 'Name4'}]
        tree = renderListView({ locations: mockLocations  })
        expect(tree.locations().length).toEqual(4)
        tree.setProps({ locations: mockLocations.slice(1) })
        expect(tree.locations().length).toEqual(3)
        
        tree.setProps({ locations: mockLocations.slice(2) })
        expect(tree.locations().length).toEqual(2)
    })

})

function renderListView(overrideProps){

    let tree = mount(
        <ListView 
            
            {...overrideProps}
        />, )
    tree.locations = () => {
        const el = tree.find(LocationItem)
        return el         
    }
    return tree
}