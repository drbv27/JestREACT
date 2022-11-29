import React from 'react'
import { mount, shallow } from 'enzyme'
import Header from '../../components/header'
import ProviderMock from '../../__mocks__/providerMock'

describe('<Header />', () => {
    

    test('Render del componente header', () => {
        const header = shallow (
        <ProviderMock>
        <Header />
        </ProviderMock>
    )
        expect(header.length).toEqual(1)
    })

    test('Render del titulo', () => {
         const header = mount (
        <ProviderMock>
        <Header />
        </ProviderMock>
    )
        expect(header.find('.navbar-brand').text()).toEqual('Shopping React')
    })

})
