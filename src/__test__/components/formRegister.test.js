import React from 'react'
import { create } from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import FormRegister from '../../components/formRegister'
import ProviderMock from '../../__mocks__/providerMock'

describe('<formRegister />', () => {
    test('Render del componente formRegister', () => {
        const formRegister = shallow (
        <ProviderMock>
        <FormRegister />
        </ProviderMock>
    )
        expect(formRegister.length).toEqual(1)
    })
})


describe('FormRegister Snapshot', () => {

    test('Comprobar la UI del componente FormRegister', ()=> {
        const formRegister = create(<FormRegister />)
        expect(formRegister.toJSON()).toMatchSnapshot()
    })

})
