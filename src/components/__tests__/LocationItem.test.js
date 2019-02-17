import React from 'react'
import { mount } from "enzyme";
import LocationItem from "../LocationItem";

describe('Location Item', ()=>{
    let tree
    beforeEach(() => {
         tree = renderLocationItem()
    })
    it('should have a container', ()=>{
        expect(tree.container()).toExist()
    })
    it('should render a location name', ()=>{
        expect(tree.LocationName()).toExist()
    })
    it('should have a name of the props passed in', ()=>{
        expect(tree.LocationName().text()).toEqual('Jimmy Johns')
        
        const diffentName = "Mike's Deli"
        tree.setProps({ name: diffentName })
        expect(tree.LocationName().text()).toEqual(diffentName)
    })
    
    it('should have a category of the props passed in', ()=>{
        expect(tree.LocationCategory().text()).toEqual('Subs')
        
        const differentCat = "Fancy"
        tree.setProps({ category: differentCat })
        expect(tree.LocationCategory().text()).toEqual(differentCat)
    })
    
    it('should have a category of the props passed in', ()=>{
        expect(tree.ImageUrl().prop('src')).toEqual('fakeImage.png')
        
        const diffentImageUrl = "mikescat.png"
        tree.setProps({ imageUrl: diffentImageUrl })
        expect(tree.ImageUrl().prop('src')).toEqual(diffentImageUrl)
    })

    it('should call the on click when pressed', ()=>{
        const onClick = jest.fn()
        tree.setProps({ onClick })

        tree.container().simulate('click')
        expect(onClick).toHaveBeenCalled()
    })

})

function renderLocationItem(overrideProps){

    let tree = mount(
        <LocationItem 
            name={'Jimmy Johns'}
            category={'Subs'}
            imageUrl={'fakeImage.png'}
            onClick={()=>{}}
            {...overrideProps}
        />, )
    tree.container = () => {
        const el = tree.find('.location-item')
        return el         
    }

    tree.LocationName = () => {
        const el = tree.find('.location-item__name')
        return el
    }
    
    tree.LocationCategory = () => {
        const el = tree.find('.location-item__category')
        return el
    }

    tree.ImageUrl = () => {
        const el = tree.find('.location-item__image > img')
        return el
    }
    return tree
}