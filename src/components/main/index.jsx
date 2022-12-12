import React from 'react'
import ProductNavigation from '../product-navigation'
import Product from '../products'

import './index.css'

const Main = (props) => {
    const { onSelect, cartMessage, data } = props
    return (
        <div className="main">
            <div>
                <Product
                    data={data}
                    cartMessage={cartMessage}
                    onSelect={onSelect}
                />
            </div>
        </div>


    )
}
export default Main;