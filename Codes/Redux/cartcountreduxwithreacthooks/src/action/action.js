export const incCartNumber = (data)=>{
    return{
        type:"ADD_TO_CART",
        payload:data
    }
}

export const decCartNumber = ()=>{
    return{
        type:"REMOVE_FROM_CART",
        
    }
}