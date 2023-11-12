import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import CartContext from '../../store/cart-context'

export default function CartItem(props) {

    const cartContext = useContext(CartContext);

    const addCartHandler = (item)=>{
        cartContext.addItem({...item,amount:1})
    }

    const deleteCartHandler = (id)=>{
        cartContext.removeItem(id)
    }

    return (
        <>
            <div className='my-2 py-3' style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #AF601A"}}>

                <div style={{ display: 'flex', flexDirection: "column", alignItems: "flex-start" }}>
                    <h5>{props.name}</h5>
                    <div>
                        <b style={{ color: "#AF601A" }}>${props.price.toFixed(2)}</b>
                        <b className="ms-5">x{props.amount}</b>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <Button variant="danger" className="mx-1" style={{ width: "2.5rem" }} onClick={()=>addCartHandler(props.item)}>+</Button>
                    <Button variant="outline-danger" style={{ width: "2.5rem" }} onClick={()=>deleteCartHandler(props.item.id)}>-</Button>
                </div>

            </div>

        </>

    )
}
