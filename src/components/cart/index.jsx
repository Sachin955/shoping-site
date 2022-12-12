import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Cart = (props) => {
    const { cartItem, onRemove, decreaseItems, IncreaseItems, cartCount, onSelect } = props
    // const result = cartItem.reduce((a, b) => a + b.amount * b.qty, 0)
    return (
        <div className="cart">
            <h4>Cart Items {cartCount}</h4>
            <div className='emptyCart'>
                {
                    cartItem.length === 0 ?
                        <div >
                            <h3>Your Cart is Empty</h3>
                            <Link to="/home">
                                <button type="button">Go to Home</button>
                            </Link>
                        </div> :
                        <div>
                            <table className="cart-table">
                                <thead>
                                    <th>Article</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Total Items</th>
                                    <th>Total Amount</th>
                                    <th>Action</th>
                                </thead>
                                <div>
                                    {cartItem.map((item, id) => {
                                        console.log(item, "cartIteam")
                                        return (
                                            <tbody key={id}>
                                                <tr>
                                                    <td><img src={item.url} alt="cartImage" className='cart-image' /></td>
                                                    <td>{item.title}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{item.qty}</td>
                                                    <td>{item.qty * item.amount}</td>
                                                    <td><button onClick={() => onSelect(item)}>+</button></td>
                                                    <td><button onClick={() => decreaseItems(item)}>-</button></td>
                                                    <td><button onClick={() => onRemove(item)}>Remove</button></td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
                                </div>
                            </table>
                        </div>}
            </div>

        </div>

    )
}
export default Cart;