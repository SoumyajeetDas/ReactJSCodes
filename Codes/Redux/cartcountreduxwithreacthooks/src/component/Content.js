import React from 'react'
import { useDispatch} from 'react-redux'
import { incCartNumber } from '../action/action'

const Content = () => {


    // useSelector Hook is basically used to get the state from the Store 
    // const myState = useSelector((state)=>state.cartItems) 


    // useDispatch() is used to call the Redux Function depending on the action type
    const dispatch = useDispatch();

    const addCartHandler = (dataObj)=>{
        dispatch(incCartNumber(dataObj))
    }
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=90&.v=1567022219953" style={{height:"300px"}} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Iphone</h5>
                                <p className="card-text">Price - Rs. 1,00,000</p>


                                <button href="/" className="btn btn-danger" onClick={()=>addCartHandler({price:1000,name:'Iphone'})}>Add to Cart</button>
                            </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}


export default Content