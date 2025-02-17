import React, { useEffect, useState } from 'react'
import { LinearProgress} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';



const Product = (props) => {

    const [qty, setQty] = useState(1)

    const productDetails = useSelector(state => state.productDetails)
    const {product, loading, error} = productDetails
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
    }, [])

    const handleAddToCart=()=>{
        props.history.push('/cart/' + props.match.params.id +"?qty="+ qty )
    }

    return ( 
        <div>
            {loading ? <div><LinearProgress variant='indeterminate' color='secondary'>Loading...</LinearProgress> </div>:error ? <div>{error}</div>:
                
                (
                    <div className='details'>
                    <div className='back'><Link to='/'>Go back</Link></div>
                    
                    <div className='details-image' data-aos='flip-left'>
                        <img src={product.image} alt='product'/>
                        </div>
                        <div className='details-info'>
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.brand}
                                </li>
                                <li>
                                    $<b>{product.price}</b>
                                </li>
                                <li>
                                    Description:
                                    <div>
                                        {product.description}
                                    </div>
                                </li>
                                <li>
                                    {product.rating} stars ({product.numReviews} Reviews)
                                </li>
                            </ul>
                        </div>
                        <div className='details-action'>
                            <ul>
                                <li>
                                    Price: $<b>{product.price}</b>
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ? 'in stock' : "Out of Stock"}
                                </li>
                                <li>
                                    Qty: 
                                    <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                        {[...Array(product.countInStock).keys()].map(x=>
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    {product.countInStock > 0 && 
                                        <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                                            
                                    }  
                                </li>
                            </ul>
                        </div>
                </div>     
                )
                
                }
            
        </div>
        
    )
}

export default Product
