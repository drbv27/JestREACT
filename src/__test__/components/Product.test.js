import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/providerMock'
import ProductMock from '../../__mocks__/productMock'
import Product from '../../components/product'

describe('Pruebas para componente <Product/>', () => {

    test('Render del componente product', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        )
        expect(product.length).toEqual(1)
    })

    test('Prueba de boton comprar', () => {
        const addToCart = jest.fn();
        const wrapper = mount(
            <ProviderMock>
                <Product product={ProductMock}
                    addToCart={addToCart}
                />
            </ProviderMock>
        )
        wrapper.find('button').simulate('click')
        expect(addToCart).toHaveBeenCalledTimes(1)
    })


})
