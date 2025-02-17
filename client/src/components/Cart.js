import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Cart = (props) => {

    const cart = useSelector(state => state.cart)

    const {cartItems} = cart

    const productId = props.match.params.id 
    const qty = props.location.search ? Number(props.location.search.split("=")[1]):1
    const dispatch = useDispatch()

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[])
    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div> Price </div>
                        { cartItems.length === 0 ? <div>Cart Is Empty</div> : 
                            cartItems.map(item => 
                                <div>
                                    <img src={item.image} alt='product' />
                                    <div className='cart-name'>
                                        <div> {item.name} </div>
                                        <div>
                                            Qty: 
                                            <select>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                            </select>
                                        </div>
                                        <div> {item.price} </div>
                                    </div>
                                </div>    
                            )
                        }
                    </li>
                </ul>
            </div>
            <div className="cart-action">
                <h4>
                    Subtotal({cartItems.reduce((a,c) => a + c.qty, 0)}) :
                    ${cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                </h4>
                <button className="button primary" disabled={cartItems.length===0}>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default Cart
