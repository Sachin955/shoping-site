import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useState } from 'react'
import ProductNavigation from '../product-navigation'
import './index.css'

function Product({ data, onSelect }) {
    const [selection, setSelection] = useState(data)
    const onSelection = (a) => {
        const myresult = data.filter((x) => x.category === a)
        console.log(myresult)
        setSelection(myresult)
    }
    return (
        <div className='products'>
            <div >
                <div class="card" >
                    <table className='products-table'>
                        {selection.map((item, index) => {
                            return (
                                <tbody>
                                    <div class="card-body">
                                        <tr><img src={item.url} className="product-img" alt="hekko" /></tr>
                                        <div class="card-title">
                                            <tr><p>{item.title}</p></tr>
                                            <tr><p>${item.amount}</p></tr>
                                        </div>
                                        <tr>
                                            <div class="modal-footer">
                                                <button className="btn btn-primary" data-bs-dismiss="modal" onClick={() => onSelect(item, index)}>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </tr>
                                    </div>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
            <div className='product-navigation'>
                <ProductNavigation onSelection={onSelection} data={data} />
            </div>
        </div>



    )




}
export default Product

